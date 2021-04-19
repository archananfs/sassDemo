export class Loader{
    private navElement: HTMLInputElement;
    private closeBtn: HTMLInputElement;
    private spanBtn :HTMLInputElement;
    private clickBtn: HTMLInputElement;

    constructor(){
        this.navElement = <HTMLInputElement>document.getElementById("mySidenav");
        this.closeBtn   = <HTMLInputElement>document.getElementById("closeButton");
        this.clickBtn   = <HTMLInputElement>document.getElementById("clickBtn");
        this.spanBtn    = <HTMLInputElement>document.getElementById("spanElement");
        this.initializeListener();
    }

    private initializeListener():void {
        let self = this;
        this.spanBtn.addEventListener("click", function(){
            self.openMenu();
        });

        this.closeBtn.addEventListener("click", function(){
            self.closeMenu();
        });

        this.clickBtn.addEventListener("click", function(){
            self.showMessage();
        });
    }

    public openMenu(){
        this.navElement.style.width = "250px";
    }

    public closeMenu(){
        this.navElement.style.width = "0px";
    }

    public showMessage(){
        alert("Hello this is main template");
    }
}

new Loader();