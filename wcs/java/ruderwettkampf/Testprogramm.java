package ruderwettkampf;

import java.util.Scanner;

public class Testprogramm {

	/* Klassenvariablen */
	
	private static Scanner sc = new Scanner(System.in);
	
	/* Klassenmethoden */
	
	public static void main(String[] args) throws InterruptedException {
		
		int anzahlBoote;
		int anzahlRuderer;
		int distanz;
		
		System.out.print("Wie viele Boote? ");
		anzahlBoote = sc.nextInt();
		if (anzahlBoote < 1)
			falscheEingabe();
		
		System.out.print("2 oder 4 Ruderer? ");
		anzahlRuderer = sc.nextInt();
		if (anzahlRuderer != 2 && anzahlRuderer != 4)
			falscheEingabe();
		
		System.out.print("Welche Distanz? ");
		distanz = sc.nextInt();
		if (distanz <= 0)
			falscheEingabe();
		
		sc.close();
		
		new Simulation(anzahlBoote, anzahlRuderer, distanz).wettkampf();
	}
	
	private static void falscheEingabe() {
		sc.close();
		throw new IllegalArgumentException("Ungültige Eingabe");
	}
	
}
