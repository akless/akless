package aquarium2;

import aquarium.Aquarium;
import aquarium.Fisch;

public class Haifisch extends Fisch {

	/* Konstruktoren */
	
	public Haifisch(int x, int y, boolean direction) {
		super(x, y, "<///====><", "><====\\\\\\>", direction);
	}

	/* Instanzmethoden */

	public void swim(Aquarium aquarium) {
		
		super.swim(aquarium);
		
		if ((int)(Math.random() * 4) == 0) {
			if ((int)(Math.random() * 2) == 0) {
				if (this.y > 0)
					this.y--;
			}
			else {
				if (this.y < aquarium.getHeight() - 1)
					this.y++;
			}
		}
	}
	
}
