export module TimerApp {
    export class Timer {
        public min = 0;
        public second = 0;
        public zeroPlaceholder = "0";
        public timer = document.getElementById("count-up") as HTMLElement;


        countUp() {
            this.second++;
            if (this.second == 59) {
                this.second = 0;
                this.min = this.min + 1;
            }
            if (this.second == 10) {
                this.zeroPlaceholder = '';
            } else
                if (this.second == 0) {
                    this.zeroPlaceholder = "0";
                }

            this.timer.innerText = this.min + ':' + this.zeroPlaceholder + this.second;
        }
    }
}
