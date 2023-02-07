-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 07-Fev-2023 às 03:59
-- Versão do servidor: 10.4.27-MariaDB
-- versão do PHP: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `capi`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `product`
--

CREATE TABLE `product` (
  `id` int(11) NOT NULL,
  `artist` varchar(255) NOT NULL,
  `title` varchar(255) NOT NULL,
  `first_genre` varchar(255) NOT NULL,
  `second_genre` varchar(255) NOT NULL,
  `first_subgenre` varchar(255) NOT NULL,
  `second_subgenre` varchar(255) NOT NULL,
  `price` decimal(6,2) NOT NULL,
  `old_price` decimal(6,2) NOT NULL,
  `type` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `product`
--

INSERT INTO `product` (`id`, `artist`, `title`, `first_genre`, `second_genre`, `first_subgenre`, `second_subgenre`, `price`, `old_price`, `type`, `image`) VALUES
(1, 'Fat Freddy\'s Drop', 'Based On A True Story', 'Electronic', 'Downtempo', 'Dub', 'Broken Beat', '150.00', '179.99', 'VINIL - LP', 'https://i.discogs.com/0J5NjVzDkucZqs9JeXd2GRDkiPYOJFMlGS_XOgBy8pg/rs:fit/g:sm/q:90/h:598/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTU5ODcx/Mi0xMzc5ODE1MDg3/LTk2NjYuanBlZw.jpeg'),
(2, 'Stardust', 'Music Sounds Better With You', 'Electronic', 'House', 'France', '', '100.00', '0.00', 'VINIL - 12\"', 'https://i.discogs.com/O5klxSKsUSHBuPhdqE9_GVoHm3T7eCc3lIfjPY8kB28/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTQwODct/MTIzMDA1NzQ4NC5q/cGVn.jpeg'),
(3, 'Pink Floyd', 'Dark Side Of The Moon', 'Rock', 'Prog Rock', 'Psychedelic Rock', 'Classic Rock', '250.00', '273.90', 'VINIL - LP', 'https://i.discogs.com/D7Lv-E5A2O2USX79WKD-MjV_4tBvfEpf3BV1cOXoyF0/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTkyODc4/MDktMTQ3ODEwNTc4/MS03MDM5LmpwZWc.jpeg'),
(4, 'Thievery Corporation', 'Radio Retaliation', 'Hip Hop', 'Reggae', 'Dub', 'Downtempo', '180.00', '0.00', 'VINIL - 2xLP', 'https://i.discogs.com/nblKB59_F0hzjNGGhfmtzoXi2KS8U7GmsQN67Eq09Mo/rs:fit/g:sm/q:90/h:600/w:548/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE0NzI1/MjQtMTQ1OTMwNDg0/NC03Nzk0LmpwZWc.jpeg'),
(5, 'Björk', 'Post', 'Electronic', 'Trip Hop', 'Experimental', 'Downtempo', '299.99', '312.00', 'VINIL - LP', 'https://i.discogs.com/nKIGMO-FhgjIZAxpTKIx__vLsrg6XTEUEbeMXtgnJMs/rs:fit/g:sm/q:90/h:581/w:588/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEwMjQ4/MS0xMjMyMTQ2Nzgy/LmpwZWc.jpeg'),
(6, 'Jorge Ben', 'Jorge Ben', 'Brasil', 'Samba-Rock', 'MPB', 'Bossanova', '130.00', '159.99', 'VINIL - LP', 'https://i.discogs.com/e8XliqJxlmtY2ES7-X9l9hihTTU9RQzL8Ecu6eWsQuA/rs:fit/g:sm/q:90/h:597/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTc1MzM1/NC0xNjI0OTA4NTI3/LTM1NTcuanBlZw.jpeg'),
(7, 'Gilberto Gil', 'Gilberto Gil', 'Brasil', 'Rock', 'MPB', 'Experimental', '129.00', '0.00', 'VINIL - LP', 'https://i.discogs.com/ziSmvh-hsLvFiOeEeA_8qNMsxf8Fvv9k4IArMareiCM/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI0NDE5/ODItMTU4MTEyNDcy/Ny01Mzk1LmpwZWc.jpeg'),
(8, 'Jorge Ben', 'A Tábua de Esmeralda', 'Brasil', 'Rock', 'MPB', 'Experimental', '185.00', '199.99', 'VINIL - LP', 'https://i.discogs.com/9mTmdmJ83N7UQaJ9Bspo0qG-eZKruEWZ4ozEPF3UchA/rs:fit/g:sm/q:90/h:591/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTIxMDU1/NzQtMTUwMjU3OTkw/My01MjA4LmpwZWc.jpeg'),
(9, 'Tim Maia', 'Tim Maia', 'Brasil', 'Soul', 'MPB', 'Funk / Soul', '250.00', '0.00', 'VINIL - LP', 'https://i.discogs.com/UuTMeX6fH6-kUKXMa0UNIQ-7zifUyCZfKo92ljPqt8g/rs:fit/g:sm/q:90/h:598/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTc1Nzk2/OC0xNTAyNTc3MzE5/LTMyMzQuanBlZw.jpeg'),
(10, 'Cinthie', '803 Crystal Grooves 004', 'Electronic', '', 'House', 'Deep House', '109.00', '0.00', 'VINIL - 12\"', 'https://i.discogs.com/33utZur_vWWyrHxcKtWbCB1NtVLnhACmayt3qu4yeV4/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE1NjMy/MTIxLTE1OTQ5ODkz/MDYtMjI4OC5qcGVn.jpeg');

-- --------------------------------------------------------

--
-- Estrutura da tabela `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(150) NOT NULL,
  `email` varchar(150) NOT NULL,
  `password` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Extraindo dados da tabela `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`) VALUES
(1, 'teste', 'teste@teste.com', '123456'),
(2, 'teste22', 'teste2@teste.com', '12345622'),
(3, 'Joao', 'joao@joao.com.br', '123456'),
(4, 'joao2', 'joao2@joao.com', '123456');

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `product`
--
ALTER TABLE `product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de tabela `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
