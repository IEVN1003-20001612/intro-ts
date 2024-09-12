
class Figura {
    constructor() {}

    
    calcularArea(): number {
        return 0;
    }

    calcularVolumen(): number {
        return 0;
    }

    imprimirResultados() {
        console.log(`Área: ${this.calcularArea().toFixed(2)}, Volumen: ${this.calcularVolumen().toFixed(2)}`);
    }
}
class Circulo extends Figura {
    protected radio: number; 

    constructor(radio: number) {
        super();
        this.radio = radio;
    }

    calcularArea(): number {
        return Math.PI * Math.pow(this.radio, 2);
    }

    calcularVolumen(): number {
        return 0; 
    }
}

class Cilindro extends Circulo {
    private altura: number;

    constructor(radio: number, altura: number) {
        super(radio);
        this.altura = altura;
    }

    calcularArea(): number {
        const areaBase = super.calcularArea();
        const perimetroBase = 2 * Math.PI * this.radio; 
        const areaLateral = perimetroBase * this.altura;
        return 2 * areaBase + areaLateral;
    }

    calcularVolumen(): number {
        return super.calcularArea() * this.altura;
    }
}
class Pentagono extends Figura {
    private lado: number;
    private apotema: number;

    constructor(lado: number, apotema: number) {
        super();
        this.lado = lado;
        this.apotema = apotema;
    }

    calcularArea(): number {
        const perimetro = this.lado * 5;
        return (perimetro * this.apotema) / 2;
    }

    calcularVolumen(): number {
        return 0;
    }
}
class PrismaRectangular extends Figura {
    private largo: number;
    private ancho: number;
    private altura: number;

    constructor(largo: number, ancho: number, altura: number) {
        super();
        this.largo = largo;
        this.ancho = ancho;
        this.altura = altura;
    }

    calcularArea(): number {
        return 2 * (this.largo * this.ancho + this.largo * this.altura + this.ancho * this.altura);
    }

    calcularVolumen(): number {
        return this.largo * this.ancho * this.altura;
    }
}

const circulo = new Circulo(5);
console.log('Círculo:');
circulo.imprimirResultados(); 

const cilindro = new Cilindro(5, 10);
console.log('Cilindro:');
cilindro.imprimirResultados(); 

const pentagono = new Pentagono(4, 6);
console.log('Pentágono:');
pentagono.imprimirResultados(); 

const prisma = new PrismaRectangular(4, 5, 6);
console.log('Prisma Rectangular:');
prisma.imprimirResultados(); 
