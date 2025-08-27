/*
  Warnings:

  - You are about to drop the column `aiInsights` on the `PrivateGPSubmission` table. All the data in the column will be lost.
  - You are about to drop the column `consultationTime` on the `PrivateGPSubmission` table. All the data in the column will be lost.
  - You are about to drop the column `medicationHistory` on the `PrivateGPSubmission` table. All the data in the column will be lost.
  - You are about to drop the column `missingInfoImpact` on the `PrivateGPSubmission` table. All the data in the column will be lost.
  - You are about to drop the column `practiceSize` on the `PrivateGPSubmission` table. All the data in the column will be lost.
  - You are about to drop the column `redFlags` on the `PrivateGPSubmission` table. All the data in the column will be lost.
  - You are about to drop the column `role` on the `PrivateGPSubmission` table. All the data in the column will be lost.
  - You are about to drop the column `roleOther` on the `PrivateGPSubmission` table. All the data in the column will be lost.
  - You are about to drop the column `timeForPrep` on the `PrivateGPSubmission` table. All the data in the column will be lost.
  - You are about to drop the column `timeline` on the `PrivateGPSubmission` table. All the data in the column will be lost.
  - You are about to drop the column `willingToTrial` on the `PrivateGPSubmission` table. All the data in the column will be lost.
  - You are about to drop the column `wouldImproveEfficiency` on the `PrivateGPSubmission` table. All the data in the column will be lost.
  - Added the required column `averageConsultTime` to the `PrivateGPSubmission` table without a default value. This is not possible if the table is not empty.
  - Added the required column `historyGatheringTime` to the `PrivateGPSubmission` table without a default value. This is not possible if the table is not empty.
  - Added the required column `patientPreparation` to the `PrivateGPSubmission` table without a default value. This is not possible if the table is not empty.
  - Added the required column `patientsPerMonth` to the `PrivateGPSubmission` table without a default value. This is not possible if the table is not empty.
  - Added the required column `planType` to the `PrivateGPSubmission` table without a default value. This is not possible if the table is not empty.
  - Added the required column `practiceType` to the `PrivateGPSubmission` table without a default value. This is not possible if the table is not empty.
  - Added the required column `practitionerCount` to the `PrivateGPSubmission` table without a default value. This is not possible if the table is not empty.
  - Added the required column `willingToPilot` to the `PrivateGPSubmission` table without a default value. This is not possible if the table is not empty.
  - Made the column `practiceName` on table `PrivateGPSubmission` required. This step will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_PrivateGPSubmission" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "practiceName" TEXT NOT NULL,
    "practiceType" TEXT NOT NULL,
    "practitionerCount" TEXT NOT NULL,
    "patientsPerMonth" TEXT NOT NULL,
    "biggestChallenge" TEXT,
    "averageConsultTime" TEXT NOT NULL,
    "historyGatheringTime" TEXT NOT NULL,
    "patientPreparation" TEXT NOT NULL,
    "timeEfficiency" BOOLEAN NOT NULL DEFAULT false,
    "patientSatisfaction" BOOLEAN NOT NULL DEFAULT false,
    "clinicalQuality" BOOLEAN NOT NULL DEFAULT false,
    "whiteLabel" BOOLEAN NOT NULL DEFAULT false,
    "multiLanguage" BOOLEAN NOT NULL DEFAULT false,
    "lifestyleData" BOOLEAN NOT NULL DEFAULT false,
    "planType" TEXT NOT NULL,
    "concerns" TEXT,
    "willingToPilot" TEXT NOT NULL,
    "contactName" TEXT,
    "contactRole" TEXT,
    "contactEmail" TEXT,
    "contactPhone" TEXT,
    "additionalInfo" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_PrivateGPSubmission" ("concerns", "contactEmail", "contactName", "contactRole", "createdAt", "id", "practiceName", "updatedAt") SELECT "concerns", "contactEmail", "contactName", "contactRole", "createdAt", "id", "practiceName", "updatedAt" FROM "PrivateGPSubmission";
DROP TABLE "PrivateGPSubmission";
ALTER TABLE "new_PrivateGPSubmission" RENAME TO "PrivateGPSubmission";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
