function LoadMasks() {
    const cpfInput = document.querySelector(".js-cpf-mask");
    const cnpjInput = document.querySelector(".js-cnpj-mask");
    const cepInput = document.querySelector(".js-cep-mask");
    const cellphoneInput = document.querySelectorAll(".js-cellphone-mask");
  
    if (cpfInput) {
      cpfInput.addEventListener("keypress", cpfMask);
      cpfInput.addEventListener("paste", cpfMask);
    }
  
    if (cnpjInput) {
      cnpjInput.addEventListener("keypress", cnpjMask);
      cnpjInput.addEventListener("paste", cnpjMask);
    }
  
    if (cepInput) {
      cepInput.addEventListener("keypress", cepMask);
      cepInput.addEventListener("paste", cepMask);
    }
  
    if (cellphoneInput) {
      cellphoneInput.forEach((inputElement) => {
        inputElement.addEventListener("keyup", cellphoneMask);
        inputElement.addEventListener("paste", cellphoneMask);
      });
    }
  
    function cpfMask(e) {
      if (e.type === "paste") {
        e.target.value = (e.clipboardData || window.clipboardData).getData("text");
      }
  
      e.target.value = e.target.value.replace(/[A-z]/g, "");
      let cpf = e.target.value.replace(/[^\d]/g, "");
  
      if (cpf.length === 3) {
        e.target.value = cpf.replace(/(\d{3})/, "$1.");
      } else if (cpf.length === 6) {
        e.target.value = cpf.replace(/(\d{3})(\d{3})/, "$1.$2.");
      } else if (cpf.length === 9) {
        e.target.value = cpf.replace(/(\d{3})(\d{3})(\d{3})/, "$1.$2.$3-");
      } else if (cpf.length === 11) {
        e.target.value = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
      }
    }
  
    function cnpjMask(e) {
      if (e.type === "paste") {
        e.target.value = (e.clipboardData || window.clipboardData).getData("text");
      }
  
      e.target.value = e.target.value.replace(/[A-z]/g, "");
      let cnpj = e.target.value.replace(/[^\d]/g, "");
  
      if (cnpj.length === 2) {
        e.target.value = cnpj.replace(/(\d{2})/, "$1.");
      } else if (cnpj.length === 5) {
        e.target.value = cnpj.replace(/(\d{2})(\d{3})/, "$1.$2.");
      } else if (cnpj.length === 8) {
        e.target.value = cnpj.replace(/(\d{2})(\d{3})(\d{3})/, "$1.$2.$3/");
      } else if (cnpj.length === 12) {
        e.target.value = cnpj.replace(/(\d{2})(\d{3})(\d{3})(\d{4})/, "$1.$2.$3/$4-");
      } else if (cnpj.length === 14) {
        e.target.value = cnpj.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, "$1.$2.$3/$4-$5");
      }
    }
  
    function cepMask(e) {
      if (e.type === "paste") {
        e.target.value = (e.clipboardData || window.clipboardData).getData("text");
      }
  
      e.target.value = e.target.value.replace(/[A-z]/g, "");
      let cep = e.target.value.replace(/[^\d]/g, "");
  
      if (cep.length === 5) {
        e.target.value = cep.replace(/(\d{5})/, "$1-");
      } else if (cep.length === 8) {
        e.target.value = cep.replace(/(\d{5})(\d{3})/, "$1-$2");
      }
    }
  
    function cellphoneMask(e) {
      if (e.type === "paste") {
        e.target.value = (e.clipboardData || window.clipboardData).getData("text");
      }
  
      e.target.value = e.target.value.replace(/[A-z]/g, "");
      let cellphone = e.target.value.replace(/[^\d]/g, "");
  
      if (cellphone.length === 2) {
        e.target.value = cellphone.replace(/(\d{2})/, "($1) ");
      } else if (cellphone.length === 6) {
        e.target.value = cellphone.replace(/(\d{2})(\d{4})/, "($1) $2-");
      } else if (cellphone.length >= 11) {
        e.target.value = cellphone.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
      }
    }
  }
  
  LoadMasks();
