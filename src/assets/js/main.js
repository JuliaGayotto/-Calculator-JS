function createCalculator () {
    return {
        display: document.querySelector('.display'),

        start() {
            this.buttonClicks();
            
        },

        doMath() {
            let count = this.display.value;

            try{
                count = eval(count);

                if (!count) {
                    this.display.value = 'ERROR';
                    return;
                }

                this.display.value = count;
            } catch (e) {
                this.display.value = 'ERROR'
                return;
            }
        },

        clearDisplay() {
            this.display.value = '';
        },

        deleteOne () {
            this.display.value = this.display.value.slice(0, -1);
        },

        buttonClicks() {
            document.addEventListener('click', e => {
                const el = e.target; 

                if(el.classList.contains('btn-display')) {                    
                    this.btnToDisplay(el.innerText);
                }

                if(el.classList.contains('btn-clear')) {
                    this.clearDisplay();
                }

                if(el.classList.contains('btn-del')) {
                    this.deleteOne();
                }

                if(el.classList.contains('btn-eq')) {
                    this.doMath();
                }

            });
        },

        btnToDisplay(valor) {
            this.display.value += valor
        }

    };
};

const calculator = createCalculator();
calculator.start();


