package ruderwettkampf;

public class Ruderer {

	/* Klassenvariablen */

	public static final int MINIMALE_LEISTUNG = 400;
	public static final int MAXIMALE_LEISTUNG = 500;
	
	/* Instanzvariablen */
	
	private int leistung;
	
	/* Konstruktoren */
	
	public Ruderer() {
		setTagesform();
	}
	
	/* Instanzmethoden */
	
	public int getLeistung() {
		
		return leistung;
	}
	
	public void setTagesform() {
		this.leistung = MINIMALE_LEISTUNG + (int) (Math.random() * 101);
	}

	@Override
	public String toString() {
		
		return "Ruderer mit " + this.leistung + " Watt";
	}
	
}
