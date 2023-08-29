type ClassType<T> = new (...args: any[]) => T;
const Deco = (factoryArg: ClassType<any>): PropertyDecorator => (target: any, propKey: symbol | string) => {
    console.log("Decorator applied")
}

export const MyDecorator = (obj: ClassType<any>): PropertyDecorator => Deco(obj)