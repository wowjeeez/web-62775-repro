import {MyDecorator} from "./deco"
class OtherClass {

}
class MyClass {
    @MyDecorator(OtherClass)
    public prop: string[]
}


const inst = new MyClass()