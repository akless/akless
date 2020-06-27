package bonus.aquarium.more;

import bonus.aquarium.Aquarium;
import bonus.aquarium.Fisch;

public class Schwertfisch extends Fisch {

	/* Konstruktoren */
	
	public Schwertfisch(int x, int y, boolean direction) {
		super(x, y, "-<><", "><>-", direction);
	}

	/* Instanzmethoden */

	public void swim(Aquarium aquarium) {		
		
		super.swim(aquarium);
		
		if ((int)(Math.random() * 5) == 0) {
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
