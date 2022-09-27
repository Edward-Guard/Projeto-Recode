CREATE TABLE `cliente` (
  `nome` varchar(50) DEFAULT NULL,
  `nascimento` varchar(50) DEFAULT NULL,
  `cpf` bigint NOT NULL,
  `email` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`cpf`)
  );
  
CREATE TABLE `viagem` (
`id` int NOT NULL AUTO_INCREMENT,
  `origem` enum('Demacia','Noxus','Shurima','Piltover','Targon','Freljord','Ionia') NOT NULL,
  `destino` enum('Demacia','Noxus','Shurima','Piltover','Targon','Freljord','Ionia') NOT NULL,
  `passageiros` tinyint DEFAULT NULL,
  `cpf-cliente` varchar(45) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `idx_viagem_passageiros` (`passageiros`)

);