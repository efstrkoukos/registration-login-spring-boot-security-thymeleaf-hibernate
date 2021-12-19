package net.javaguides.springboot.web.dto;

public class Constants {
	
	 public enum USER_TYPE {
	        GYM("GYM", 1),
	        MEMBER("MEMBER", 2);

	        private final String name;
	        private final int code;


	        private USER_TYPE(String name, int code) {
	            this.name = name;
	            this.code = code;

	        }

	        public String getName() {
	            return name;
	        }

	        public int getCode() {
	            return code;
	        }

	        
	        public static USER_TYPE getUserType(String value) {
	            if (value.equals(USER_TYPE.GYM.getName()))
	                return USER_TYPE.GYM;
	            else if (value.equals(USER_TYPE.MEMBER.getName()))
	                return USER_TYPE.MEMBER;
	            else
					return null;
	            
	        }

	        public static USER_TYPE getUserType(int value) {
	            if (value == (USER_TYPE.GYM.getCode()))
	                return USER_TYPE.GYM;
	            else if (value == (USER_TYPE.MEMBER.getCode()))
	                return USER_TYPE.MEMBER;
	            else
				return null;
	            
	        }

}
}
