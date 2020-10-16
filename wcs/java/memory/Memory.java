package memory;

import java.util.Scanner;

public class Memory {

	/* Instanzvariablen */

	private char[][] solution;
	private char[][] status;
	private char cursor;
	private int cursorX;
	private int cursorY;
	private char back;
	private char revealed;
	private int turn;

	/* Konstruktoren */

	/**
	 * Erzeugt ein Memoryspiel mit Standardsymbolen für die Spielfelder
	 */
	public Memory() {
		this(new char[] { 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H' }, '□', '*');
	}

	/**
	 * Erzeugt ein Memoryspiel mit individuellen Symbolen.
	 * 
	 * @param symbols Symbole die aufgedeckt werden koennen
	 * @param back    Symbol für verdeckte Felder
	 * @param cursor  Symbol für den Cursor
	 */
	public Memory(char[] symbols, char back, char cursor) {

		int size = (int) Math.sqrt(symbols.length * 2);
		this.solution = new char[size][size];
		this.status = new char[size][size];
		this.cursor = cursor;
		this.cursorX = 0;
		this.cursorY = 0;
		this.back = back;

		for (int i = 0; i < this.status.length; i++)
			for (int j = 0; j < this.status.length; j++)
				this.status[i][j] = this.back;

		for (int i = 0; i < size*size; i++) {
			int x, y;
			do {
				x = (int) (Math.random() * size);
				y = (int) (Math.random() * size);
			} while (this.solution[x][y] != '\u0000');
			this.solution[x][y] = symbols[i / 2];
		}
	}

	/* Instanzmethoden */

	public void left() {
		if (this.cursorX > 0)
			this.cursorX--;
	}

	public void right() {
		if (this.cursorX < status.length - 1)
			this.cursorX++;
	}

	public void up() {
		if (this.cursorY > 0)
			this.cursorY--;
	}

	public void down() {
		if (this.cursorY < status[0].length - 1)
			this.cursorY++;
	}

	public void reveal() {

		char c = this.status[this.cursorY][this.cursorX];

		if (c != this.back)
			return;

		c = this.status[this.cursorY][this.cursorX] = this.solution[this.cursorY][this.cursorX];

		if (this.revealed == '\u0000') {
			this.revealed = c;
			return;
		}
		
		this.turn++;
		
		if (this.revealed == c) {
			this.revealed = '\u0000';
			return;
		}
		
		System.out.println(this);

		for (int i = 0; i < this.status.length; i++)
			for (int j = 0; j < this.status[i].length; j++)
				if (this.status[i][j] == c || this.status[i][j] == this.revealed)
					this.status[i][j] = this.back;

		this.revealed = '\u0000';
	}
	
	public boolean checkGoal() {
		for (int i = 0; i < this.status.length; i++)
			for (int j = 0; j < this.status[i].length; j++)
				if (this.status[i][j] == this.back)
					return false;
		return true;
	}

	public int getTurn() {
		return this.turn;
	}
	
	@Override
	public String toString() {

		String str = "";
		for (int y = 0; y < this.status.length; y++) {
			for (int x = 0; x < this.status[y].length; x++) {
				str += " ";
				str += this.cursorX == x && this.cursorY == y ? this.cursor : " ";
				str += this.status[y][x];
			}
			str += "\n";
		}
		return str;
	}

	/* Klassenmethoden */

	public static void main(String[] args) {

		Memory game = new Memory();
		Scanner sc = new Scanner(System.in);
		char c;

		do {
			System.out.println(game);
			System.out.print("Befehl: ");
			c = sc.next().toLowerCase().charAt(0);
			System.out.println();

			switch (c) {
			case 'w':
				game.up();
				break;
			case 'a':
				game.left();
				break;
			case 's':
				game.down();
				break;
			case 'd':
				game.right();
				break;
			case 'e':
				game.reveal();
				if (game.checkGoal()) {
					System.out.println(game);
					System.out.println("Gewonnen! Du hast " + game.getTurn() + " Versuche gebraucht.");
					sc.close();
					return;
				}
				break;
			}
		} while (c != 'q');

		System.out.println("Auf Wiedersehen!");
		sc.close();
	}
}
