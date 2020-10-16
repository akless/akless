package aquarium;

public class Testprogramm {

	public static void main(String[] args) throws InterruptedException {
		
		Aquarium aquarium = new Aquarium(28, 4);
		
		aquarium.addFisch(new Fisch( 0, 3, false));
		aquarium.addFisch(new Fisch( 7, 0,  true));
		aquarium.addFisch(new Fisch(17, 1, false));
		aquarium.addFisch(new Fisch(25, 2,  true));
		
		while (true) {
			System.out.println(aquarium);
			Thread.sleep(300);
			System.out.flush();
			aquarium.next();
		}
	}
	
}
