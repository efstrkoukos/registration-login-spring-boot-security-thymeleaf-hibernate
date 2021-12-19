package net.javaguides.springboot.web.dto;



import java.util.Random;



public class Statics {
	
	public static String generateRand() {
		int leftLimit = 48; // numeral '0'
	    int rightLimit = 122; // letter 'z'
	    int targetStringLength = 5;
	    Random random = new Random();

	    String generatedString = random.ints(leftLimit, rightLimit + 1)
	      .filter(i -> (i <= 57 || i >= 65) && (i <= 90 || i >= 97))
	      .limit(targetStringLength)
	      .collect(StringBuilder::new, StringBuilder::appendCodePoint, StringBuilder::append)
	      .toString();

	    return generatedString;

}
	
	public static String emailBody(String name ,String pass) {
		String mb="Καλωσήρθατε στην παρέα του GymGeek "+name+"! "
				+ "O κωδικός πρόσβασης σας για την εφαρμογή είναι ο : "
				+pass+".Όταν συνδεθείτε για πρώτη φορά, θα σας ζητηθεί αλλαγή του"
						+ " κωδικού πρόσβασης!";
		return mb;
	}
	
}
