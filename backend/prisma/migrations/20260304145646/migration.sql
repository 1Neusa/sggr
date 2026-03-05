/*
  Warnings:

  - You are about to drop the column `nomeG` on the `gravidas` table. All the data in the column will be lost.
  - Added the required column `nome` to the `Gravidas` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `gravidas` DROP COLUMN `nomeG`,
    ADD COLUMN `nome` VARCHAR(191) NOT NULL;
