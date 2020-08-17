import React from "react";
import alunos from "../../data/alunos";

export default (props) => {
  const alunosLI = alunos.map((aluno) => {
    return (
      // Key serve para o react identificar de forma mais rápida e fácil qualquer alteração feita na sua lista (por exemplo se houver atualizações). Ela deve ser ÙNICA. Por tanto seu valor deve ser algum parâmetro que só aparecerá uma única vez. No caso, o id do aluno
      <li key={aluno.id}>
        {aluno.id}) {aluno.nome} -> {aluno.nota}
      </li>
    );
  });
  return (
    <div>
      <ul style={{ listStyle: "none" }}>{alunosLI}</ul>
    </div>
  );
};
