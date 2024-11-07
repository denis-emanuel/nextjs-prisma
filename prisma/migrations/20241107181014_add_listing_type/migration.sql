/*
  Warnings:

  - You are about to drop the column `content` on the `posts` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "ListingType" AS ENUM ('FOR_SALE', 'FOR_RENT');

-- AlterTable
ALTER TABLE "posts" DROP COLUMN "content",
ADD COLUMN     "description" TEXT,
ADD COLUMN     "listingType" "ListingType" NOT NULL DEFAULT 'FOR_SALE';
