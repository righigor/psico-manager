/*
  Warnings:

  - Added the required column `clinic_id` to the `patients` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_patients" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "birth_date" DATETIME NOT NULL,
    "diagnosis" TEXT NOT NULL,
    "clinic_id" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "patients_clinic_id_fkey" FOREIGN KEY ("clinic_id") REFERENCES "clinics" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_patients" ("address", "birth_date", "createdAt", "diagnosis", "email", "id", "name", "phoneNumber", "updatedAt") SELECT "address", "birth_date", "createdAt", "diagnosis", "email", "id", "name", "phoneNumber", "updatedAt" FROM "patients";
DROP TABLE "patients";
ALTER TABLE "new_patients" RENAME TO "patients";
CREATE UNIQUE INDEX "patients_email_key" ON "patients"("email");
CREATE UNIQUE INDEX "patients_phoneNumber_key" ON "patients"("phoneNumber");
PRAGMA foreign_key_check("patients");
PRAGMA foreign_keys=ON;
