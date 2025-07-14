public class Student {
    static int nextRollNumber = 1; 

    String name;
    int age;
    int rollNumber;
    int knowledge;

    // Constructor with auto-generated roll number
    Student(String name, int age, int knowledge) {
        this.name = name;
        this.age = age;
        this.knowledge = knowledge;
        this.rollNumber = nextRollNumber++;
    }

    public void introduce() {
        System.out.println("Hello, my name is " + name + " and my roll number is " + rollNumber);
    }

    public void study() {
        System.out.println(name + " is studying...");
        knowledge += 20;
    }

    public void teach(Student s){
        System.out.println(this.name+" is teaching "+s.name);
    }
    public static void main(String[] args) {
        Student s1 = new Student("Priyanshu",20, 50);
        Student s2 = new Student("Bob", 19, 60);
        Student s3 = new Student("Charlie", 20, 70);

        s1.introduce();
        s2.introduce();
        s3.introduce();
        s2.teach(s3);
    }
}
