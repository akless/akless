package aquarium;

public class Aquarium {

	/* Instanzvariablen */
	
	private Fisch[] inhalt;
	private int width;
	private int height;
	
	/* Konstruktor */
	
	public Aquarium(int width, int height) {
		
		this.width = width;
		this.height = height;
		
		inhalt = new Fisch[0];
	}
	
	/* Instanzmethoden */
	
	public void addFisch(Fisch fisch) {
		
		Fisch[] inhalt = new Fisch[this.inhalt.length + 1];
		
		for (int i = 0; i < this.inhalt.length; i++)
			inhalt[i] = this.inhalt[i];
		
		inhalt[inhalt.length - 1] = fisch;
		
		this.inhalt = inhalt;
	}

	public void next() {
		
		for (int i = 0; i < inhalt.length; i++) {
			
			Fisch fisch = inhalt[i];
			
			if (fisch == null)
				continue;
			
			fisch.swim(this);
		}
		
	}
	
	public int getWidth() {
		return width;
	}

	public int getHeight() {
		return height;
	}
	
	@Override
	public String toString() {
				
		String aquarium = "";
		
		for (int y = 0; y < this.height; y++) {
			aquarium += "|";
			for (int x = 0; x < this.width; x++) {
				Fisch fisch = getFisch(x, y);
				if (fisch != null) {
					aquarium += fisch;
					x += fisch.length() - 1;
				}
				else
					aquarium += " ";
			}
			aquarium += "|\n";
		}
		
		aquarium += "+";
		for (int x = 0; x < width; x++)
			aquarium += "-";
		aquarium += "+\n";
		
		return aquarium;
	}
	
	private Fisch getFisch(int x, int y) {
		
		for (int i = 0; i < this.inhalt.length; i++)
			if (this.inhalt[i].getX() == x && this.inhalt[i].getY() == y)
				return inhalt[i];
		
		return null;
	}
	
}
