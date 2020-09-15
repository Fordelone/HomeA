﻿class EnqueteController{
    constructor(){
        this._questionNumber = 2;
        this._Altera = [0,0];
        this._daddyDJ;
        this._NambaToEdit;
        this._selects = document.querySelectorAll(".SelectTypeForm");
        this._alter = document.querySelectorAll(".alternativa");
        this.Titles = document.querySelector("#formTitleEnquete");

        this.Init();
        this.addSelect();
    }


    get displayTitles(){
        return this.Titles.value;
    }

    verifPar(Namba){
        if (Namba % 2 == 0) {
            return false;

        } else{
            return true;

        }

    }

    Init(){
        var btnNewPergunta = document.querySelector("#NovaPergunta");
        this.addEventListenerAll(btnNewPergunta, 'click drag dblclick',e=>{
            btnNewPergunta.parentNode.removeChild(btnNewPergunta);
            let Question = document.createElement('div');
            if (this.verifPar(this._questionNumber)) {
                Question.classList.add("bgBlanc");
                Question.classList.add("Blanc");

            } else{
                Question.classList.add("bgNoire");
                Question.classList.add("Noire"); 

            }
            Question.id = "L" + this._questionNumber.toString();
            this._Altera.push(0);
            Question.innerHTML = `
            <div class="questionBA questionBA-${this._questionNumber}">
                <input type="text" class="generalQuestionsText" id="formTitleEnquete" placeholder="Digite Sua Pergunta">
                <br /><br />
                <select class="SelectTypeForm" id="SelectTypeForm-${this._questionNumber}">
                    <option value="radio">Alternativa</option>
                    <option value="text">Texto</option>
                </select>
                    <br /><br />
                <div class="RadioTyper RadioTyper-${this._questionNumber}-2">
                    <div class="alternativa alternativa-${this._questionNumber}" id="alternativa-${this._questionNumber}-${this._Altera[this._questionNumber]}"><input type="radio" id="alternativa0-${this._questionNumber}" name="${this._questionNumber}" value="alternativa0-${this._questionNumber}" checked /> <label id="alternative0-${this._questionNumber}"for="alternativa0-${this._questionNumber}">ㅤAlternativa 1</label> </div> <br />
                    <div class="alternativa alternativa-${this._questionNumber}" id="alternativa-${this._questionNumber}-${this._Altera[this._questionNumber] = this._Altera[this._questionNumber] + 1}"><input type="radio" id="alternativa1-${this._questionNumber}" name="${this._questionNumber}" value="alternativa1-${this._questionNumber}" /> <label id="alternative1-${this._questionNumber}" for="alternativa1-${this._questionNumber}">ㅤAlternativa 2</label> </div> <br />
                </div>
                <br />
            </div>
            `;
                document.querySelector("#formCreateFullEnquete").appendChild(Question);
                document.querySelector("#formCreateFullEnquete").appendChild(btnNewPergunta);
                
                if (this.verifPar(this._questionNumber)) {
                    document.body.style.backgroundColor = "#86E9BD";
                    btnNewPergunta.style.backgroundColor = "#5BF8E4";

                } else{
                    document.body.style.backgroundColor = "#5BF8E4";
                    btnNewPergunta.style.backgroundColor = "#86E9BD";

                }
                this._questionNumber++;
                this.addSelect();
                this.addAlter();
                this.formRadio();

        });

    }

    formRadio(){
       let Typer = document.querySelectorAll(".alternativa");
       Typer.forEach(element => {
           this.addEventListenerAll(element, 'click drag dblclick',e=>{
                console.log(element.id);

           });

       });

    }

    addSelect(){
        this._selects = document.querySelectorAll(".SelectTypeForm");
        this._selects.forEach(element => {
            element.addEventListener("change",e=>{
                this._daddyDJ = element.parentNode;
                this._NambaToEdit = this._daddyDJ.classList.toString().substring(this._daddyDJ.classList.toString().indexOf("-") + 1);
                this.addTypes(element);

            });
            
        });

    }

    addTypes(element){
        this._Altera[this._NambaToEdit] = 0;
        switch (element.value) {
            case 'radio':
                this._daddyDJ.innerHTML =
                `
                <input type="text" class="generalQuestionsText" id="formTitleEnquete" placeholder="Digite Sua Pergunta">
                <br /><br />
                <select class="SelectTypeForm" id="SelectTypeForm-${this._NambaToEdit}">
                    <option value="radio">Alternativa</option>
                    <option value="text">Texto</option>
                </select>
                    <br /><br />
                <div class="RadioTyper RadioTyper-${this._NambaToEdit}-2">
                <div id="alternativa-${this._NambaToEdit}-${this._Altera[this._NambaToEdit]}" class="alternativa"><input type="radio" id="alternativa0-${this._NambaToEdit}" name="${this._NambaToEdit}" value="alternativa0-${this._NambaToEdit}" checked /> <label for="alternativa0-${this._NambaToEdit}">ㅤAlternativa 1</label> </div> <br />
                <div id="alternativa-${this._NambaToEdit}-${this._Altera[this._questionNumber] = this._Altera[this._questionNumber] + 1}" class="alternativa"><input type="radio" id="alternativa1-${this._NambaToEdit}" name="${this._NambaToEdit}" value="alternativa1-${this._NambaToEdit}" /> <label for="alternativa1-${this._NambaToEdit}">ㅤAlternativa 2</label> </div> <br />
                </div>
                <br />
            `   
                break;
            case 'text':
                this._daddyDJ.innerHTML =
                `
                <input type="text" class="generalQuestionsText" id="formTitleEnquete" placeholder="Digite Sua Pergunta">
                <br /><br />
                <select class="SelectTypeForm" id="SelectTypeForm-${this._NambaToEdit}">
                    <option value="text">Texto</option>    
                    <option value="radio">Alternativa</option>
                </select>
                    <br /><br />
                <div class="RadioTyper">
                <textarea class="generalEnqueteText" cols="5" rows="1" id="alternativa0-${this._NambaToEdit}"></textarea>
                    
                </div>
                <br />
            `
        }
        this.addSelect();
        this.addAlter();

    }

    addAlter(){
        let dio = 0;
        this._alter = document.querySelectorAll(".alternativa");
        this._alter.forEach(elementar => {
            elementar.addEventListener("click",e=>{
                console.log(elementar + dio);
                dio++;
                this._daddyDJ = elementar.parentNode;
                this._NambaToEdit = this._daddyDJ.classList.toString().substring(this._daddyDJ.classList.toString().indexOf("-") + 1);

            });
            
        });

    }

    addEventListenerAll(Element, Events,Functional){
        let Evento = Events.split(' ');
        Evento.forEach(Splito => {
            Element.addEventListener(Splito,Functional);
            
        });

    }

}