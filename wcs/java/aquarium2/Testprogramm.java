package bonus.aquarium.more;

import bonus.aquarium.Aquarium;
import bonus.aquarium.Fisch;

public class Testprogramm {

	public static void main(String[] args) throws InterruptedException {
		
		Aquarium aquarium = new Aquarium(40, 10);
		
		aquarium.addFisch(new Fisch( 0, 8, false));
		aquarium.addFisch(new Fisch( 7, 1,  true));
		aquarium.addFisch(new Fisch(17, 3, false));
		aquarium.addFisch(new Fisch(25, 5,  true));
		
		aquarium.addFisch(new     Haifisch(28, 2, false));
		aquarium.addFisch(new   Kugelfisch(15, 7,  true));
		aquarium.addFisch(new Schwertfisch( 3, 5,  true));
		
		while (true) {
			System.out.println(aquarium);
			Thread.sleep(300);
			aquarium.next();
		}
	}
	
}
