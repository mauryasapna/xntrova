-- ========================================================
-- Database Name: xntrova
-- Table Name: form_leads
-- Description: Xntrova Website Inquiry & Lead Capture
-- ========================================================

-- 1. Create Clean Database
CREATE DATABASE IF NOT EXISTS `xntrova` 
CHARACTER SET utf8mb4 
COLLATE utf8mb4_unicode_ci;

USE `xntrova`;

-- 2. Create Leads Table (Perfect match for Website Form)
CREATE TABLE IF NOT EXISTS `form_leads` (
    `id` INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(150) NOT NULL COMMENT 'Customer / Client Name',
    `phone` VARCHAR(25) NOT NULL COMMENT 'Customer Phone or WhatsApp',
    `service` VARCHAR(150) DEFAULT 'General Inquiry' COMMENT 'Selected Service',
    `message` TEXT DEFAULT NULL COMMENT 'Requirements / Own words',
    `email` VARCHAR(150) DEFAULT NULL COMMENT 'Optional Email Address',
    `company` VARCHAR(150) DEFAULT NULL COMMENT 'Optional Company Name',
    `ip_address` VARCHAR(45) DEFAULT NULL COMMENT 'Visitor IP Address',
    `status` ENUM('new', 'contacted', 'in_progress', 'converted', 'closed') NOT NULL DEFAULT 'new',
    `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    INDEX `idx_phone` (`phone`),
    INDEX `idx_created_at` (`created_at`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 3. Optional View for singular 'form_lead' compatibility
CREATE OR REPLACE VIEW `form_lead` AS SELECT * FROM `form_leads`;
