-- CreateTable
CREATE TABLE `Gravidas` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `nascimento` DATETIME(3) NOT NULL,
    `endereco` VARCHAR(191) NULL,
    `estado_civil` VARCHAR(191) NULL,
    `num_tel` VARCHAR(191) NOT NULL,
    `num_proximo` VARCHAR(191) NULL,
    `ultima_mestr` DATETIME(3) NOT NULL,
    `num_gravidez` INTEGER NULL,
    `tipos_partos` VARCHAR(191) NOT NULL,
    `data_provavel_parto` DATETIME(3) NOT NULL,
    `doencas_ant` VARCHAR(191) NOT NULL,
    `doencas_pre` VARCHAR(191) NOT NULL,
    `data_cadastro` DATETIME(3) NOT NULL,
    `func_Id` INTEGER NOT NULL,
    `doctor_Id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Funcionarios` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `ender` VARCHAR(191) NOT NULL,
    `tel` VARCHAR(191) NOT NULL,
    `cargo` VARCHAR(191) NOT NULL,
    `profissao` VARCHAR(191) NULL,
    `tipo_func` VARCHAR(191) NOT NULL,
    `cod_acesso` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Doctor` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `ender` VARCHAR(191) NOT NULL,
    `especialidade` VARCHAR(191) NULL,
    `cod_acesso` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Gravidas` ADD CONSTRAINT `Gravidas_func_Id_fkey` FOREIGN KEY (`func_Id`) REFERENCES `Funcionarios`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Gravidas` ADD CONSTRAINT `Gravidas_doctor_Id_fkey` FOREIGN KEY (`doctor_Id`) REFERENCES `Doctor`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
