import React from "react";

export default function Modal() {
  return (
    <div>
      <div class="modal" tabindex="-1" id="modal">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <p className="h4">Mensaje enviado</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
