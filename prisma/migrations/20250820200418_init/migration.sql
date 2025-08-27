-- CreateTable
CREATE TABLE "CareHomeSubmission" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "careHomeName" TEXT NOT NULL,
    "residentCount" TEXT NOT NULL,
    "recordingMethod" TEXT NOT NULL,
    "recordingMethodOther" TEXT,
    "biggestChallenge" TEXT,
    "detailsLostFrequency" TEXT NOT NULL,
    "timePerShift" TEXT,
    "wouldFindEasier" TEXT NOT NULL,
    "instantSummaries" INTEGER NOT NULL DEFAULT 0,
    "centralHistory" INTEGER NOT NULL DEFAULT 0,
    "shiftCommunication" INTEGER NOT NULL DEFAULT 0,
    "reducedAdmin" INTEGER NOT NULL DEFAULT 0,
    "concerns" TEXT,
    "willingToTrial" TEXT NOT NULL,
    "contactName" TEXT,
    "contactRole" TEXT,
    "contactEmail" TEXT,
    "contactPhone" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "PatientSubmission" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "ageRange" TEXT NOT NULL,
    "currentHealthcare" TEXT NOT NULL,
    "chronicConditions" TEXT,
    "biggestFrustration" TEXT,
    "forgottenDetails" TEXT NOT NULL,
    "appointmentPrep" TEXT,
    "likelyToUse" TEXT NOT NULL,
    "neverForget" INTEGER NOT NULL DEFAULT 0,
    "betterAppointments" INTEGER NOT NULL DEFAULT 0,
    "onePlace" INTEGER NOT NULL DEFAULT 0,
    "privacy" INTEGER NOT NULL DEFAULT 0,
    "concerns" TEXT,
    "monthlyPrice" TEXT,
    "willingToTest" TEXT NOT NULL,
    "contactName" TEXT,
    "contactEmail" TEXT,
    "contactPhone" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "PrivateGPSubmission" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "role" TEXT NOT NULL,
    "roleOther" TEXT,
    "practiceSize" TEXT NOT NULL,
    "consultationTime" TEXT NOT NULL,
    "missingInfoImpact" TEXT NOT NULL,
    "timeForPrep" TEXT NOT NULL,
    "wouldImproveEfficiency" TEXT NOT NULL,
    "redFlags" INTEGER NOT NULL DEFAULT 0,
    "timeline" INTEGER NOT NULL DEFAULT 0,
    "medicationHistory" INTEGER NOT NULL DEFAULT 0,
    "aiInsights" INTEGER NOT NULL DEFAULT 0,
    "concerns" TEXT,
    "willingToTrial" TEXT NOT NULL,
    "contactName" TEXT,
    "contactRole" TEXT,
    "contactEmail" TEXT,
    "practiceName" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "NHSGPSubmission" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "role" TEXT NOT NULL,
    "roleOther" TEXT,
    "practiceSize" TEXT NOT NULL,
    "historyTakingTime" TEXT NOT NULL,
    "missingInfoFrequency" TEXT NOT NULL,
    "wouldImproveEfficiency" TEXT NOT NULL,
    "redFlags" INTEGER NOT NULL DEFAULT 0,
    "timeline" INTEGER NOT NULL DEFAULT 0,
    "medicationHistory" INTEGER NOT NULL DEFAULT 0,
    "emrIntegration" INTEGER NOT NULL DEFAULT 0,
    "concerns" TEXT,
    "willingToTrial" TEXT NOT NULL,
    "contactName" TEXT,
    "contactRole" TEXT,
    "contactEmail" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
