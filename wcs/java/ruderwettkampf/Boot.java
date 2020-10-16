package ruderwettkampf;

public abstract class Boot {

	/* Instanzvariablen */
	
	private Ruderer[] ruderer;
	private int gesamtleistung;
	private int x;
	private String oben1;
	private String oben2;
	private String mitte;
	private String unten1;
	private String unten2;
	private boolean phase;
	
	/* Konstruktoren */
	
	public Boot(int anzahlRuderer, String oben1, String oben2, String mitte, String unten1, String unten2) {
		
		this.ruderer = new Ruderer[anzahlRuderer];
		
		for (int i = 0; i < this.ruderer.length; i++) {
			this.ruderer[i] = new Ruderer();
			this.gesamtleistung += ruderer[i].getLeistung();
		}
		
		this.oben1 = oben1;
		this.oben2 = oben2;
		this.mitte = mitte;
		this.unten1 = unten1;
		this.unten2 = unten2;
	}
	
	/* Instanzmethoden */
	
	public void rudern() {
		
		//------------------------------------------------------------------------
		// Tagesform ändert sich bei jedem rudern (macht das Rennen interessanter)
		this.gesamtleistung = 0;
		for (Ruderer r : ruderer) {
			r.setTagesform();
			this.gesamtleistung += r.getLeistung();
		}
		//------------------------------------------------------------------------
		
		this.x += Math.ceil((double) (this.gesamtleistung - (Ruderer.MINIMALE_LEISTUNG * this.ruderer.length)) / (double) (Ruderer.MAXIMALE_LEISTUNG - Ruderer.MINIMALE_LEISTUNG));
		this.phase = !this.phase;
	}
	
	public int getX() {
		return this.x;
	}
	
	public int getLength() {
		return this.mitte.length();
	}
	
	@Override
	public String toString() {
		String s = "";
		s += " ".repeat(this.x) + (this.phase ? this.oben1 : this.oben2) + "\n";
		s += " ".repeat(this.x) + this.mitte + "\n";
		s += " ".repeat(this.x) +(this.phase ? this.unten1 : this.unten2) + "\n";
		return s;
	}
}
