const questions = [
  {
    question: "¿Qué comando se usa para clonar un repositorio?",
    options: ["git copy", "git clone", "git pull", "git fork"],
    answer: "git clone"
  },
  {
    question: "¿Qué hace el comando 'git init'?",
    options: [
      "Inicia un nuevo repositorio",
      "Elimina un repositorio",
      "Actualiza Git",
      "Envía cambios al repositorio"
    ],
    answer: "Inicia un nuevo repositorio"
  },
  {
    question: "¿Qué archivo se usa para ignorar archivos en Git?",
    options: [".gitignore", "ignore.txt", "config.git", ".gitconfig"],
    answer: ".gitignore"
  },
  {
    question: "¿Qué comando muestra el estado del repositorio?",
    options: ["git check", "git status", "git state", "git info"],
    answer: "git status"
  },
  {
    question: "¿Qué comando se usa para enviar cambios al repositorio remoto?",
    options: ["git commit", "git push", "git send", "git upload"],
    answer: "git push"
  },

  {
    question: "¿Qué comando se usa para clonar un repositorio?",
    options: ["git copy", "git clone", "git pull", "git fork"],
    answer: "git clone"
  },
  {
    question: "¿Qué archivo se utiliza para ignorar archivos que no se deben trackear?",
    options: [".gitignore", ".ignore", "ignore.txt", "config.json"],
    answer: ".gitignore"
  },
  {
    question: "¿Qué comando se usa para combinar ramas?",
    options: ["git join", "git rebase", "git merge", "git push"],
    answer: "git merge"
  },
  {
    question: "¿Qué comando guarda temporalmente cambios no commiteados?",
    options: ["git temp", "git pause", "git hold", "git stash"],
    answer: "git stash"
  },
  {
    question: "¿Cuál de estos comandos muestra el historial de commits?",
    options: ["git history", "git log", "git status", "git show"],
    answer: "git log"
  },
  {
    question: "¿Qué comando sube los cambios al repositorio remoto?",
    options: ["git pull", "git push", "git upload", "git commit"],
    answer: "git push"
  },
  {
    question: "¿Qué comando baja los cambios del repositorio remoto?",
    options: ["git pull", "git push", "git clone", "git commit"],
    answer: "git pull"
  },
  {
    question: "¿Qué comando inicializa un nuevo repositorio Git?",
    options: ["git new", "git init", "git start", "git create"],
    answer: "git init"
  },
  {
    question: "¿Qué comando permite ver qué archivos fueron modificados?",
    options: ["git status", "git show", "git diff", "git ls"],
    answer: "git status"
  },
  {
    question: "¿Qué hace `git commit --amend`?",
    options: [
      "Borra el último commit",
      "Modifica el último commit",
      "Crea un nuevo commit con cambios",
      "Revierte el commit anterior"
    ],
    answer: "Modifica el último commit"
  },
  {
    question: "¿Para qué sirve `git cherry-pick`?",
    options: [
      "Eliminar commits",
      "Aplicar un commit específico de otra rama",
      "Fusionar todas las ramas",
      "Reescribir el historial"
    ],
    answer: "Aplicar un commit específico de otra rama"
  },
  {
    question: "¿Qué es un 'fork' en GitHub?",
    options: [
      "Un branch nuevo",
      "Un clon local",
      "Una copia del repositorio en tu cuenta",
      "Una eliminación temporal"
    ],
    answer: "Una copia del repositorio en tu cuenta"
  },
  {
    question: "¿Qué permite `git rebase`?",
    options: [
      "Eliminar ramas",
      "Fusionar commits reescribiendo el historial",
      "Ignorar conflictos",
      "Bajar cambios del servidor"
    ],
    answer: "Fusionar commits reescribiendo el historial"
  },
  {
    question: "¿Qué herramienta de GitHub permite automatizar flujos como testeo o despliegue?",
    options: ["GitHub Flow", "GitHub Scripts", "GitHub Actions", "GitHub Commands"],
    answer: "GitHub Actions"
  },
  {
    question: "¿Qué se necesita para aprobar un Pull Request si hay reglas de protección de rama?",
    options: [
      "Nada, se mergea directo",
      "Al menos un approval",
      "Un fork activo",
      "Una rebase automática"
    ],
    answer: "Al menos un approval"
  },
  {
    question: "¿Qué archivo se usa para definir workflows en GitHub Actions?",
    options: [
      "workflow.json",
      "action.yml",
      ".github/workflows/*.yml",
      "ci.yml"
    ],
    answer: ".github/workflows/*.yml"
  },
  {
    question: "¿Qué comando se usa para ver las ramas disponibles?",
    options: [
      "git show",
      "git log",
      "git branch",
      "git list"
    ],
    answer: "git branch"
  },
  {
    question: "¿Qué opción permite eliminar una rama local?",
    options: [
      "git delete branch",
      "git branch -d nombre",
      "git remove nombre",
      "git rm -b nombre"
    ],
    answer: "git branch -d nombre"
  },
  {
    question: "¿Qué comando se usa para comparar cambios entre ramas?",
    options: [
      "git compare",
      "git diff",
      "git status",
      "git log"
    ],
    answer: "git diff"
  },
  {
    question: "¿Qué hace el comando `git revert`?",
    options: [
      "Elimina commits permanentemente",
      "Revierte cambios sin dejar registro",
      "Crea un nuevo commit que revierte otro",
      "Fusiona dos ramas automáticamente"
    ],
    answer: "Crea un nuevo commit que revierte otro"
  },
  {
    question: "¿Cuál es la diferencia entre `git reset --soft` y `--hard`?",
    options: [
      "No hay diferencia",
      "`--soft` mantiene los cambios en staging, `--hard` los borra",
      "`--soft` borra todo, `--hard` solo deshace el último commit",
      "Ambos eliminan archivos, pero `--soft` pregunta primero"
    ],
    answer: "`--soft` mantiene los cambios en staging, `--hard` los borra"
  },
  {
    question: "¿Qué es un 'pull request' en GitHub?",
    options: [
      "Una solicitud para clonar un repo",
      "Una forma de sincronizar branches locales",
      "Una propuesta de cambios en el repositorio",
      "Un merge automático entre repos"
    ],
    answer: "Una propuesta de cambios en el repositorio"
  },
  {
    question: "¿Para qué sirve el archivo CODEOWNERS en GitHub?",
    options: [
      "Asignar responsables de revisar cambios en archivos",
      "Crear reglas de seguridad",
      "Configurar workflows de CI/CD",
      "Gestionar accesos SSH"
    ],
    answer: "Asignar responsables de revisar cambios en archivos"
  },
  {
    question: "¿Qué comando permite traer los datos de un repositorio remoto sin fusionarlos?",
    options: ["git pull", "git fetch", "git push", "git stash"],
    answer: "git fetch"
  },
  {
    question: "¿Cómo se puede contribuir a un repositorio que no es tuyo?",
    options: [
      "Clonando y enviando un push directo",
      "Haciendo un fork y abriendo un pull request",
      "Usando git init desde la raíz",
      "Modificando directamente el archivo .git"
    ],
    answer: "Haciendo un fork y abriendo un pull request"
  },
  {
    question: "¿Qué opción de `git log` muestra el historial en formato de árbol?",
    options: [
      "--oneline",
      "--graph",
      "--history",
      "--tree"
    ],
    answer: "--graph"
  },
  {
    question: "¿Qué hace `git tag`?",
    options: [
      "Agrupa ramas",
      "Crea una referencia a un commit específico",
      "Ignora archivos",
      "Borra commits viejos"
    ],
    answer: "Crea una referencia a un commit específico"
  },
  {
    question: "¿Cuál es el comando para cambiar el mensaje del último commit?",
    options: [
      "git message --edit",
      "git commit --amend",
      "git reword",
      "git log -m"
    ],
    answer: "git commit --amend"
  },
  {
    question: "¿Qué archivo define las acciones automatizadas en GitHub Actions?",
    options: [
      ".workflow",
      ".github/actions.js",
      ".github/workflows/*.yml",
      "ci.config"
    ],
    answer: ".github/workflows/*.yml"
  }
]

