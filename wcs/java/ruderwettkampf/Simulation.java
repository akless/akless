package ruderwettkampf;

public class Simulation {

	/* Instanzvariablen */
	
	private Boot[] boote;
	private int distanz;
	
	/* Konstruktoren */
	
	public Simulation(int anzahlBoote, int anzahlRuderer, int distanz) {
		
		this.boote = new Boot[anzahlBoote];
		
		for (int i = 0; i < this.boote.length; i++)
			this.boote[i] = anzahlRuderer == 2 ? new Zweier() : new Vierer();
		
		this.distanz = distanz;
	}
	
	/* Instanzmethoden */
	
	public void wettkampf() throws InterruptedException {
		
		while (!zielErreicht()) {
			System.out.println("-".repeat(this.distanz + boote[0].getLength() - 1) + "| Ziel");
			for (Boot boot : boote) {
				boot.rudern();
				System.out.print(boot);
			}
			Thread.sleep(300);
		}
	}
	
	private boolean zielErreicht() {
		
		for (Boot boot : boote)
			if (boot.getX() >= this.distanz)
				return true;
		
		return false;
	}
}
