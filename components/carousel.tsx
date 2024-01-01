"use client";

import { useState } from "react";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import Image from "next/image";

export interface CarouselProps extends React.HTMLAttributes<HTMLDivElement> {
  imageUrls: string[];
}

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

export default function Carousel(props: CarouselProps) {
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = props.imageUrls.length;

  const handleNext = () => {
    if (activeStep === maxSteps - 1) setActiveStep(0);
    else setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    if (activeStep === 0) setActiveStep(maxSteps - 1);
    else setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ maxWidth: 400, flexGrow: 1 }}>
      <AutoPlaySwipeableViews
        axis="x"
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {props.imageUrls.map((step, index) => (
          <div key={index}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box component="img" className="w-full h-full" src={step} />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        sx={{ backgroundColor: "transparent" }}
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            sx={{ color: "white" }}
            className="hover:cursor-pointer"
          >
            <KeyboardArrowRight />
          </Button>
        }
        backButton={
          <Button
            size="small"
            onClick={handleBack}
            sx={{ color: "white" }}
            className="hover:cursor-pointer"
          >
            <KeyboardArrowLeft />
          </Button>
        }
      />
    </Box>
  );
}
