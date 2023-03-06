-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 06-Mar-2023 às 04:22
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
-- Estrutura da tabela `cart_items`
--

CREATE TABLE `cart_items` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `quantity` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `cart_items`
--

INSERT INTO `cart_items` (`id`, `user_id`, `product_id`, `quantity`) VALUES
(1, 1, 2, 1),
(2, 1, 3, 6),
(3, 1, 4, 1),
(4, 1, 5, 3),
(5, 1, 6, 1),
(6, 1, 7, 3),
(7, 1, 8, 2),
(8, 1, 9, 4),
(29, 1, 1, 1);

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

-- --------------------------------------------------------

--
-- Estrutura da tabela `user_tokens`
--

CREATE TABLE `user_tokens` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `token` varchar(255) NOT NULL,
  `expires_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Extraindo dados da tabela `user_tokens`
--

INSERT INTO `user_tokens` (`id`, `user_id`, `token`, `expires_at`) VALUES
(1, 1, '31d896860aa00e3201ccc1617f2ea3d381e96ebe822dfe38c9bd420de7248136', '2023-03-11 05:01:32'),
(2, 1, 'd3067ebeaff13432b8e9eace96a43d3f4514e7120ee011d0982e240cac2d5803', '2023-03-11 05:23:00'),
(3, 1, '92beebb20ef93744b9d7026e85c400b45d3f2327371b7b4b57c83befa388914a', '2023-03-11 05:23:40'),
(4, 1, 'bf133bec3a58cfae460a50469a483782e632fc2f266a1e8f0287a2ded6869bb6', '2023-03-11 05:24:07'),
(5, 1, 'cf62bd85e95736e238436d2e9f19cb89f53bd616b33678532f253b49e2aa39aa', '2023-03-11 05:24:19'),
(6, 1, '5bd417fa9f7d5ebd560dc6c0376bc3324dee2db741cc43731ba63b869e8020e0', '2023-03-11 05:29:23'),
(7, 1, '77c615ad34d75b9f891850b8798795c32b1ff8cd9eab0e124710c368b9e24748', '2023-03-11 05:33:47'),
(8, 1, '32829c0e0eabb933acbb71eaef34f9fc76ff43c67a2203f0be5e1363d88b4c78', '2023-03-11 06:05:49'),
(9, 1, 'e998e1f3d217443fc524cf3df136948dc75af3614b2bdd288535bfeb2d85083b', '2023-03-11 06:06:13'),
(10, 1, '378c22667bd3f0d979b7ffb35d3474a8273fa9848d748ff432ceb95a99d4333b', '2023-03-12 00:40:32'),
(11, 3, '1e5b8908fa1ee86203fc5fe8f7e6a223d85c5a00faace641cc5138d85b1e34b7', '2023-03-12 01:47:19'),
(12, 3, 'a6bf9f759657c3e04d43d030a691309ffd5eaecafa6fc062f8008ea1ac5ce585', '2023-03-12 01:48:59'),
(13, 1, '70dfd8187a217c42e0ad2f8876b70b4666b5c6729139dbc1690f2c51190f0889', '2023-03-13 00:36:15');

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `cart_items`
--
ALTER TABLE `cart_items`
  ADD PRIMARY KEY (`id`);

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
-- Índices para tabela `user_tokens`
--
ALTER TABLE `user_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `token` (`token`),
  ADD KEY `user_id` (`user_id`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `cart_items`
--
ALTER TABLE `cart_items`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

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

--
-- AUTO_INCREMENT de tabela `user_tokens`
--
ALTER TABLE `user_tokens`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- Restrições para despejos de tabelas
--

--
-- Limitadores para a tabela `user_tokens`
--
ALTER TABLE `user_tokens`
  ADD CONSTRAINT `fk_user_tokens_users` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
