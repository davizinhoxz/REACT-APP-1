import React, { useState } from 'react';

function Tarefas() {

    const [formData, setFormData] = useState({
        id: '',
        titulo: '',
        data: '',
        descricao: ''
    });

    const [tarefas, setTarefas] = useState([]);

    const [dadosSubmetidos, setDadosSubmetidos] = useState(null);


    // Esta função é chamada quando o formulário é submetido
    function handleSubmit(e) {
        e.preventDefault(); // impede o recarregamento da página
        setDadosSubmetidos(formData); // guarda os dados preenchidos

        const novaTarefa = {
            id: Date.now(), // gera um ID único com base no timestamp
            titulo: formData.titulo,
            data: formData.data,
            descricao: formData.descricao
        };
        setTarefas([...tarefas, novaTarefa]); // adiciona a nova tarefa à lista
    }


    function newTarefa() {
        const novaTarefa = {
            id: Date.now(), // gera um ID único com base no timestamp
            titulo: 'Euzinho',
            data: 'euzinho',
            descricao: 'ui ui ui ui ui ui ui ui ui ui ui ui ui ui ui ui ui ui'
        };
        setFormData(novaTarefa);
        setTarefas([...tarefas, novaTarefa]); // adiciona a nova tarefa à lista
        setDadosSubmetidos(null); // limpa os dados apresentados após adicionar a tarefa
    }

    // Limpa o formulário e os dados apresentados
    function limparFormulario() {
        setFormData({ id: '', titulo: '', data: '', descricao: '' });
        setDadosSubmetidos(null);
    }



    return (
        <div className="mt-4">

            <div className="col-md-6">

                <form onSubmit={handleSubmit}>
                    {/* Cada campo é controlado — o valor vem do estado React */}
                    <div className="mt-4">
                        <label>Título</label>
                        <input type="text" className="form-control" value={formData.titulo} onChange={(e) =>
                            setFormData({ ...formData, titulo: e.target.value })} required />
                    </div>
                    <div className="form-group">
                        <label>Data</label>
                        <input type="date" className="form-control" value={formData.data} onChange={(e) =>
                            setFormData({ ...formData, data: e.target.value })} required />
                    </div>
                    <div className="form-group">
                        <label>Descrição</label>
                        <textarea className="form-control" rows="3" value={formData.descricao} onChange={(e) =>
                            setFormData({ ...formData, descricao: e.target.value })}></textarea>
                    </div>



                    {/* Botões de ação */}
                    <button className="btn btn-success mr-2">Enviar</button>

                    <button type="button" className="btn btn-outline-secondary"
                        onClick={limparFormulario}>Limpar</button>

                    <button type="button" className="btn btn-outline-secondary"
                        onClick={newTarefa}>Nova Tarefa</button>

                </form>
            </div >





            <div className="col-6">
                {dadosSubmetidos && (
                    <div className="card mt-4">
                        <div className="card-body">
                            <h5 className="card-title">Dados Recebidos</h5>
                            <p><strong>Título:</strong> {dadosSubmetidos.titulo}</p>
                            <p><strong>Data:</strong> {dadosSubmetidos.data}</p>
                            <p><strong>Descrição:</strong> {dadosSubmetidos.descricao}</p>
                        </div>
                    </div>
                )}

                <h3 className="mt-4">Tarefas Criadas</h3>
                <ul className="list-group mt-4">
                    {tarefas.map((tarefa) => (
                        <li key={tarefa.id} className="list-group-item">
                            <h5>{tarefa.titulo}</h5>
                            <p>{tarefa.data}</p>
                            <p>{tarefa.descricao}</p>
                        </li>
                    ))}
                </ul>
            </div>

        </div >

    );
}
export default Tarefas;