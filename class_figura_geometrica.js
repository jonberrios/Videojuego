class Figura_Geometrica{
	constructor(coordX, coordY, color){
		this.coordX =  coordX;
		this.coordY = coordY;
		this.color = color;
		this.canvas = document.getElementById("contenedor");
		this.ctx = this.canvas.getContext("2d");
	}
	getCoordenadaX(){
		return this.coordX;
	}
	getCoordenadaY(){
		return this.coordY;
	}
	getColor(){
		return this.color;
	}
	setCoordenadaX(nuevaCoordX){
		this.coordX = nuevaCoordX;
	}
	setCoordenadaY(nuevaCoordY){
		this.coordY = nuevaCoordY;
	}
	
	borrarCanvas(){
		this.ctx.clearRect(0,0, this.canvas.width, this.canvas.height);
	}
}

class Rectangulo extends Figura_Geometrica{
	constructor(coordX, coordY, color, base, altura, velocidadMovimiento){
		super(coordX, coordY, color);
		this.base = base;
		this.altura = altura;
		this.velocidadMovimiento = velocidadMovimiento;
		this.sentidoMovimiento = 0;//0-> derecha 1-> izquierda
	}
	getBase(){
		return this.base;
	}
	getAltura(){
		return this.altura;
	}
	getVelocidadMovimiento(){
		return this.velocidadMovimiento;
	}
	graficarRectangulo(cx, cy){
		this.ctx.fillStyle = this.getColor();
		this.ctx.fillRect(cx,cy, this.getBase(), this.getAltura());
		this.ctx.strokeRect(cx,cy, this.getBase(), this.getAltura());
	}
	
	graficarPersonaje(){
		this.graficarRectangulo(this.getCoordenadaX(),this.getCoordenadaY());
	}
	
	moverPersonajeTeclado(tecla){
		if(tecla == '37' || tecla == '65'){//El personaje debe moverse a la izquierda
			this.setCoordenadaX(this.getCoordenadaX() - this.getVelocidadMovimiento());
			this.graficarRectangulo(this.getCoordenadaX(), this.getCoordenadaY());
		}
		else
			if(tecla == '38' || tecla == '87'){//El personaje debe moverse arriba
				this.setCoordenadaY(this.getCoordenadaY() - this.getVelocidadMovimiento());
				this.graficarRectangulo(this.getCoordenadaX(),this.getCoordenadaY());
			}
			else
				if(tecla == '39' || tecla == '68'){//El personaje debe moverse a la derecha
					this.setCoordenadaX(this.getCoordenadaX() + this.getVelocidadMovimiento());
					this.graficarRectangulo(this.getCoordenadaX(), this.getCoordenadaY());
					
				}
				else
					if(tecla == '40' || tecla == '83'){//El personaje debe moverse abajo
						this.setCoordenadaY(this.getCoordenadaY() + this.getVelocidadMovimiento());
						this.graficarRectangulo(this.getCoordenadaX(),this.getCoordenadaY());
					}
	}
	
	moverPersonajeAutomatico(){
		if(this.getCoordenadaX()+this.getBase() < this.canvas.width && this.sentidoMovimiento == 0){
			this.setCoordenadaX(this.getCoordenadaX()+this.getVelocidadMovimiento());
			this.graficarRectangulo(this.getCoordenadaX(),this.getCoordenadaY());
		}
		else{
			this.sentidoMovimiento = 1;
			if(this.getCoordenadaX() > 0 && this.sentidoMovimiento == 20){
				this.setCoordenadaX(this.getCoordenadaX()-this.getVelocidadMovimiento());
				this.graficarRectangulo(this.getCoordenadaX(),this.getCoordenadaY());
			}
			else{
				this.sentidoMovimiento = 0;
				this.graficarPersonaje();
			}
		}
	}
	
	graficarEscenario(){
		let x = this.getCoordenadaX();
		let y = this.getCoordenadaY();
		
		for(let i = 0; i < 8; i++){// Generador de Filas
			for(let j = 0; j < 8; j++){// Generador de columnas		
				if(j >= 7-i){
					console.log(x+" - "+y);
					this.graficarRectangulo(x,y);
					
				}
				x = x + this.getBase();	
			}
			x = this.getCoordenadaX();
			y = y + this.getAltura();
		}
	}
}

class Circunferencia extends Figura_Geometrica{
	constructor(coordX, coordY, color, radioC){
		super(coordX, coordY, color);
		this.radioC = radioC;
	}
	getRadio(){
		return this.radioC;
	}
}