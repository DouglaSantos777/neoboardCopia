import React from 'react';

const ProductHelp: React.FC<{ toggleModalClose: () => void }> = ({ toggleModalClose }) => {
    return (
        <div className='Help-Info'>
            <div className='Help-Text'>
                <div id='Neo-Text'>
                    <h1>Bem-vindo à página de <span>Produtos</span> !</h1>
                    <img src="img\Neo\NeoFinger.png" alt="Neo-Sit" />
                    <p>Esta página é onde você pode gerenciar e visualizar todos os produtos disponíveis em <span className='span-right'>sua</span> empresa.
                    </p>
                </div>
                <ul>
                    <li>
                        <h4>Produto Principal:</h4>
                        <img className='help-imgs' src="./img/helpProduct/produtoCard.png" alt="Produto do mes" />
                        <p>Na seção destacada Produto do Mês, você encontrará informações sobre o produto mais vendido do mês com faturamento e número de unidades vendidas.</p>
                    </li>

                    <li>
                        <h4>Adicionar um Novo Produto:</h4>
                        <img className='help-imgs' src="./img/helpProduct/AddProduto.png" alt="adicionar produto" />
                        <img className='help-imgs' src="./img/helpProduct/ModalProduto.png" alt="adicionar produto" />
                        <p>Para adicionar um novo produto, clique no botão "+ Produto" localizado no centro da tela à direita
                            e preencha os campos corretamente.</p>
                    </li>

                    <li>
                        <h4>Editar um Produto Existente:</h4>
                        <img className='help-imgs' src="./img/helpProduct/produtoEditar.png" alt="editar produto" />
                        <img className='help-imgs' src="./img/helpProduct/ProdutoEditado.png" alt="produto editado" />
                        <p> Para editar um produto, clique no ícone de lápis no canto superior direito do cartão do
                            produto desejado. Isso abre um modal de edição onde você pode fazer as alterações necessárias
                            nos detalhes do produto, como nome, categoria, valor e descrição.</p>
                    </li>

                    <li>
                        <h4>Filtrar e Pesquisar Produtos:</h4>
                        <img className='help-imgs' src="./img/helpProduct/ProdutoFiltrado.png" alt="produto filtrado" />
                        <img className='help-imgs' src="./img/helpProduct/ProdutoFiltradoResultado.png" alt="produto filtrado" />
                        <p>Você pode filtrar os produtos por categoria usando o menu suspenso de
                            filtragem localizado acima da lista de produtos. </p>
                        <img className='help-imgs' src="./img/helpProduct/FiltragemProduto.png" alt="filtragem produto" />
                        <p> Além disso, você pode pesquisar produtos
                            específicos digitando o nome do produto na barra de pesquisa. </p>
                    </li>

                    <li>
                        <h4>Visualizar Detalhes do Produto:</h4>
                        <img className='help-imgs' src="./img/helpProduct/verDetalhes.png" alt="detalhes produto" />
                        <p>Para visualizar mais detalhes de um produto, como sua descrição
                            completa e outras informações relevantes, clique no botão
                            "Ver produto" no cartão do produto desejado. </p>
                        <img className='help-imgs' src="./img/helpProduct/paginaProduto.png" alt="pagina do produto" />
                        <p>Isso o levará a uma página separada com detalhes mais abrangentes
                            sobre o produto selecionado.</p>
                    </li>
                </ul>
                <button onClick={toggleModalClose} className='help-btn'>Entendi</button>
            </div>

            <figure className='Neo-Left'>
            <img src="img\Neo\NeoFinger.png" alt="Neo-Sit" />
            </figure>
        </div>
    );
};

export default ProductHelp;
