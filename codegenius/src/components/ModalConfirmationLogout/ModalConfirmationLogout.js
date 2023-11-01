import './ModalConfirmationLogout.css'

function ModalLogoutConfirmationLogout() {
    return (
        <body>
            <div class="content">
                <div class="modal">
                    <div class="header">
                        <div class="header_content">
                            <p>CONFIRMAÇÃO</p>
                            <span class="material-symbols-outlined">
                                close
                            </span>
                        </div>
                    </div>
                    <div class="body_content">
                        <div class="text">
                            <div class="round">
                                <span class="material-symbols-outlined">
                                    logout
                                </span>
                            </div>
                            <div class="body_text">
                                <p>TEM CERTEZA QUE DESEJA SAIR?</p>
                                <p>Ao clicar em SAIR você terá que logar novamente.</p>
                            </div>
                        </div>
                        <div class="buttons">
                            {/* <button onclick={handleCancel}>CANCELAR</button>
                        <button onclick={handleLogout}>SAIR</button> */}
                        </div>
                    </div>
                </div>

            </div>
        </body>
    );
}

export default ModalLogoutConfirmationLogout;