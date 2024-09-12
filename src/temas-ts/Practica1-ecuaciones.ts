class EcuacionCuadratica {
    private a: number;
    private b: number;
    private c: number;

    constructor(a: number, b: number, c: number) {
        this.a = a;
        this.b = b;
        this.c = c;
    }

    private calcularDiscriminante(): number {
        return this.b ** 2 - 4 * this.a * this.c;
    }

    public calcularRaices(): string {
        const discriminante = this.calcularDiscriminante();

        if (discriminante > 0) {
            
            const x1 = (-this.b + Math.sqrt(discriminante)) / (2 * this.a);
            const x2 = (-this.b - Math.sqrt(discriminante)) / (2 * this.a);
            return `Las soluciones son x1 = ${x1} y x2 = ${x2}`;
        } else if (discriminante === 0) {
           
            const x = -this.b / (2 * this.a);
            return `Hay una solución única: x = ${x}`;
        } else {
            
            const parteReal = -this.b / (2 * this.a);
            const parteImaginaria = Math.sqrt(-discriminante) / (2 * this.a);
            return `Las soluciones complejas son x1 = ${parteReal} + ${parteImaginaria}i y x2 = ${parteReal} - ${parteImaginaria}i`;
        }
    }

    public imprimir() {
        console.log(this.calcularRaices());
    }
}

let ecuacion: EcuacionCuadratica;
ecuacion = new EcuacionCuadratica(1, -3, 2);
ecuacion.imprimir();
