// Import React
import React from "react";
// Import Spectacle Core tags
import CodeSlide from "spectacle-code-slide";
import {
  BlockQuote,
  Image,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text
} from "spectacle";
import preloader from "spectacle/lib/utils/preloader";


// Import theme
import createTheme from "spectacle/lib/themes/default";

preloader();
// Require CSS
require("normalize.css");

const theme = createTheme({
  primary: "white",
  secondary: "#1F2022",
  tertiary: "#03A9FC",
  quarternary: "#CECECE"
}, {
    primary: "Montserrat",
    secondary: "Helvetica"
  });

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={0} theme={theme} progress="bar">
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Design Patterns
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            with Kunle
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>What's a Design Pattern?</Heading>
          <List>
            <ListItem>Cure for Deja Vu</ListItem>
            <ListItem>Reuse successful design and architectures (Design Right, faster)</ListItem>
            <ListItem>They describe problems which occur over and over again in our environments</ListItem>
          </List>
          {/* <Text size={6} textColor="secondary">Design Deja Vu </Text> */}
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>Why the <span style={{ color: "red" }}>f*?@#</span> do I need to know this?</Heading>
          <List>
            <ListItem>Provides a base layer of high level terms and ideas</ListItem>
            <ListItem>Understand the design decisions for all 600 trillion frameworks out there</ListItem>
            <ListItem><span style={{ fontStyle: "italic" }}>You don't.</span> It helps and doesn't hurt. Understanding will help your everyday design desitions</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Text>With all these frameworks... </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>"You sound smarter"</Quote>
            <Cite>Kunle</Cite>
          </BlockQuote>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="tertiary">
          <Heading>Three types of design patterns</Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={3}>Creational Patterns</Heading>
          <Image src="https://housing.umn.edu/sites/housing.umn.edu/files/hammer_icon-01.png" />
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={3}>Abstract Factory</Heading>
          <Text>Help you create families of objects (or products) </Text>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="secondary">
          <Heading size={3}>For example...</Heading>
        </Slide>
        <CodeSlide
          textColor="tertiary"
          bgColor="lightblue"
          transition={["fade"]}
          code={require("raw-loader!./AbstractFactory.example")}
          lang="javascript"
          ranges={[
            { loc: [0, 3], title: "Color class" },
            { loc: [0, 3], note: "Create a color class" },
            { loc: [4, 10], note: "We implement the color with our Red class" },
            { loc: [12, 15], note: "We create out abstract factory" },
            { loc: [16, 27], note: "Now we can create out concrete factory based on the abstract one!" }
          ]}
        />

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={3}>Builder</Heading>
          <Text>Makes constructing objects really easy</Text>
        </Slide>

        <CodeSlide
          bgColor="lightblue"
          code={require("raw-loader!./Builder.example")}
          lang="javascript"
          ranges={[
            { loc: [0, 10], title: "Building a bank account!" },
            { loc: [10, 13], note: "Build the account number" },
            { loc: [13, 17], note: "Build the owner" },
            { loc: [17, 21], note: "Build the branch" },
            { loc: [21, 25], note: "Build the opening balance" },
            { loc: [25, 29], note: "Build the rate" },
            { loc: [29, 39], note: "Our build function" },
            { loc: [40, 46], title: "Use the actual builder!!" }
          ]}
        />

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={3}>Factory Method</Heading>
          <Text>Makes it easy to encapsulate creation of an object outside of a framework or module</Text>
        </Slide>
        <CodeSlide
          lang="js"
          bgColor="lightblue"
          code={require("raw-loader!./FactoryMethod.example")}
          ranges={[
            { loc: [0, 10], note: "Create factory function" },
            { loc: [10, 13], note: "Assign factory" }
          ]}
        />
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={3}>Prototype</Heading>
          <Text>Makes it easy to create objects by cloning the base guy (prototype)</Text>
        </Slide>
        <CodeSlide
          lang="js"
          bgColor="lightblue"
          code={require("raw-loader!./Prototype.example")}
          ranges={[
            { loc: [0, 1], note: "Create Superclass of prototype" },
            { loc: [6, 16], note: "Create a clone method on it" },
            { loc: [18, 31], note: "Create prototype" },
            { loc: [31, 42], note: "Create a store to hold the colors" },
            { loc: [42, 49], note: "Receive the cloned color!" }
          ]}
        />
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={3}>Singleton</Heading>
          <Text>Makes it easy to have central access to functionality</Text>
        </Slide>
        <CodeSlide
          lang="js"
          bgColor="lightblue"
          code={require("raw-loader!./Singleton.example")}
          ranges={[
            { loc: [0, 17], title: "Simple Angular2 App" },
            { loc: [12, 14], note: "Api Service is a singleton" }
          ]}
        />
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={3}>Structural Patterns</Heading>
          <Image src="https://cdn3.iconfinder.com/data/icons/lightly-icons/30/652816-hierarchy-480.png" />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={3}>Adapter</Heading>
          <Text>Helps you get incompatible classes to work together that couldn't otherwise</Text>
        </Slide>
        <CodeSlide
          lang="js"
          bgColor="lightblue"
          code={require("raw-loader!./Adapter.example")}
          ranges={[
            { loc: [0, 64], title: "Bird and a Duck" },
            { loc: [0, 5], note: "We have a bird" },
            { loc: [6, 17], note: "Sparrow implements Bird" },
            { loc: [18, 22], note: "We have a toy duck" },
            { loc: [23, 30], note: "PlasticToyDuck implements ToyDuck" },
            { loc: [31, 44], note: "BirdAdapter implements ToyDuck (converts bird to duck" },
            { loc: [49, 62], note: "When we use the adapter on our Sparrow, we can adapt it to the interface of the duck" }
          ]}
        />
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={3}>Bridge</Heading>
          <Text>Helps by decoupling abstraction from its implementation so the two can vary independently</Text>
        </Slide>
        <CodeSlide
          lang="js"
          bgColor="lightblue"
          code={require("raw-loader!./Bridge.example")}
          ranges={[
            { loc: [0, 9], note: "About page object" },
            { loc: [10, 15], note: "Dark theme object" },
            { loc: [16, 19], note: "inject the dark theme as a bridge instead of hard coding it" }
          ]}
        />
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={3}>Composite</Heading>
          <Text>Compose objects into tree structures. Objects made of other objects</Text>
        </Slide>
        <CodeSlide
          lang="js"
          bgColor="lightblue"
          code={require("raw-loader!./Composite.example")}
          ranges={[
            { loc: [0, 16], title: "Composite Objects" },
            { loc: [0, 1], note: "Create top level composite object" },
            { loc: [1, 3], note: "Create gallery compositions" },
            { loc: [3, 7], note: "Create leaf objects" },
            { loc: [7, 11], note: "Add images to the gallery compositions" },
            { loc: [11, 13], note: "Add the gallery compositions to the top level container" }
          ]}
        />
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={3}>Decorator</Heading>
          <Text>Helps you dynamically change change the behavior of an object at runtime. Wrap in object decorator class.</Text>
        </Slide>
        <CodeSlide
          lang="js"
          bgColor="lightblue"
          code={require("raw-loader!./Decorator.example")}
          ranges={[
            { loc: [0, 23], title: "Decorators" },
            { loc: [0, 9], note: "Define the base class" },
            { loc: [9, 20], note: "Define decorators" },
            { loc: [20, 23], note: "Now we can wrap SimpleCoffee with MilkCoffee to augment its functions" }
          ]}
        />
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={3}>Facade</Heading>
          <Text>Helps you dynamically change change the behavior of an object at runtime. Wrap in object decorator class.</Text>
        </Slide>
        <CodeSlide
          lang="js"
          bgColor="lightblue"
          code={require("raw-loader!./Facade.example")}
          ranges={[
            { loc: [0, 9], title: "Facade!" },
            { loc: [1, 16], note: "Lots of internal functions.. annoying to keep track of it all." },
            { loc: [16, 22], note: "Lots of internal functions.. annoying to keep track of it all." },
            { loc: [23, 40], note: "Create the facade" },
            { loc: [28, 34], note: "Create the facade" },
            { loc: [34, 39], note: "Create the facade" },
            { loc: [41, 44], note: "Now you can call all the relevant things from the facade" }
          ]}
        />
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={3}>Flyweight</Heading>
          <Text>Helps you minimize memory usage by sharing objects</Text>
        </Slide>
        <CodeSlide
          lang="js"
          bgColor="lightblue"
          code={require("raw-loader!./Flyweight.example")}
          ranges={[
            { loc: [0, 2], title: "Flyweight!" },
            { loc: [0, 13], note: "When you take orders youre grabbing cached flyweights!" },
            { loc: [14, 23], note: "Cached flyweights are used" },
            { loc: [31, 39], note: "Milk is only created once, flyweight is shared" },
          ]}
        />
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={3}>Proxy</Heading>
          <Text>Helps you add more functionality to a object or class by wrapping it</Text>
        </Slide>
        <CodeSlide
          lang="js"
          bgColor="lightblue"
          code={require("raw-loader!./Proxy.example")}
          ranges={[
            { loc: [0, 5], title: "Proxy!" },
            { loc: [0, 9], note: "Lab door" },
            { loc: [10, 28], note: "Security object takes a door and extends functionality" },
            { loc: [29, 32], note: "Using the proxy door with its new authentication" }
          ]}
        />
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={3}>Behavioral Patterns</Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={3}>Chain Of Responsibility</Heading>
          <Text>Helps you add more functionality to a object or class by wrapping it</Text>
        </Slide>
        <CodeSlide
          bgColor="lightblue"
          transition={[]}
          lang="js"
          code={require("raw-loader!./ChainOfResponsibility.example")}
          ranges={[
            { loc: [0, 6], title: "Express middleware!" },
            { loc: [0, 1], note: "Chain that handles converting the response to json" },
            { loc: [1, 2], note: "handle urlencoded setting" },
            { loc: [2, 3], note: "Handles cookie parsing" },
            { loc: [3, 4], note: "Handles routes" },
            { loc: [5, 6], note: "Handles static resources" },
          ]}
        />
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={3}>Command</Heading>
          <Text>Helps you to pass actions as objects</Text>
        </Slide>
        <CodeSlide
          bgColor="lightblue"
          transition={[]}
          lang="js"
          code={require("raw-loader!./Command.example")}
          ranges={[
            { loc: [0, 14], title: "Light switch Commands!" },
            { loc: [2, 3], note: "Create RemoteControl that will handle the command" },
            { loc: [3, 4], note: "Create lights!" },
            { loc: [4, 6], note: "Create commands for on and off" },
            { loc: [7, 12], note: "Now we can execute the commands without knowing them especifically (dynamically)" }
          ]}
        />
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={3}>Iterator</Heading>
          <Text>Helps you access the elements of an object without exposing the underlying representation</Text>
        </Slide>
        <CodeSlide
          bgColor="lightblue"
          transition={[]}
          lang="js"
          code={require("raw-loader!./Iterator.example")}
          ranges={[
            { loc: [0, 14], note: "Iterators!" },
            { loc: [4, 5], note: "Create an array list to iterate through" },
            { loc: [5, 8], note: "Add some stuff to it" },
            { loc: [9, 10], note: "Create the iterator" },
            { loc: [11, 15], note: "Iterate through the array" }
          ]}
        />
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={3}>Mediator</Heading>
          <Text>Helps you communicate between two objects by introducing a third party object to handle the communication</Text>
        </Slide>
        <CodeSlide
          bgColor="lightblue"
          transition={[]}
          lang="js"
          code={require("raw-loader!./Mediator.example")}
          ranges={[
            { loc: [0, 14], note: "Chat Room Mediator!" },
            { loc: [1, 8], note: "Create the chat room mediator class" },
            { loc: [9, 23], note: "Creating the User class" },
            { loc: [24, 25], note: "Create the new chat room" },
            { loc: [26, 28], note: "Create the new users, attached to the mediator" },
            { loc: [29, 31], note: "Send the messages! Both users get it" }
          ]}
        />
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={3}>Memento</Heading>
          <Text>Helps with capturing and storing the current state of an object in a manner that it can be restored later on in a smooth manner.</Text>
        </Slide>
        <CodeSlide
          bgColor="lightblue"
          transition={[]}
          lang="js"
          code={require("raw-loader!./Memento.example")}
          ranges={[
            { loc: [0, 14], note: "Text Editor Memento!" },
            { loc: [0, 9], note: "Create the actual memento that saves the state" },
            { loc: [10, 18], note: "Create new Editor class" },
            { loc: [23, 26], note: "Save method that saves the state of the text document and returns new memento" },
            { loc: [34, 40], note: "Now we can type and save!" },
            { loc: [38, 40] }
            
          ]}
        />
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={3}>Observer</Heading>
          <Text>Helps you manage communication between objects so when an object changes it state, all dependent objects are updated.</Text>
        </Slide>
        <CodeSlide
          bgColor="lightblue"
          transition={[]}
          lang="js"
          code={require("raw-loader!./Observer.example")}
          ranges={[
            { loc: [0, 8], title: "RxJS Observables!" },
            { loc: [0, 4], note: "Create an observable and have it emit a value: 1" },
            { loc: [5, 8], note: "Subscribe to it and get the value!" }
          ]}
        />
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={3}>Visitor</Heading>
          <Text>Helps you add further operations to objects without having to modify them.</Text>
        </Slide>
        <CodeSlide
          bgColor="lightblue"
          transition={[]}
          lang="js"
          code={require("raw-loader!./Visitor.example")}
          ranges={[
            { loc: [0, 11], title: "Monkey Visitor!" },
            { loc: [0, 9], note: "Create out monkey class" },
            { loc: [5, 8], note: "Our function allows us to accept a visitor" },
            { loc: [10, 15], note: "We create our visitor (has visit method)" },
            { loc: [16, 18], note: "Use our visitor to run our logic!" }
          ]}
        />
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={3}>Strategy</Heading>
          <Text>Helps you switch an algorithm or strategy based on the situation.</Text>
        </Slide>
        <CodeSlide
          bgColor="lightblue"
          transition={[]}
          lang="js"
          code={require("raw-loader!./Strategy.example")}
          ranges={[
            { loc: [0, 11], title: "Sorting Alogorithm Strategies" },
            { loc: [0, 6], note: "Create pretend bubble sort strategy!" },
            { loc: [7, 13], note: "Create pretend quick sort strategy!" },
            { loc: [14, 21], note: "Strategy selection function (pass in data set)" },
            { loc: [22, 30], note: "See, different strategies are used!" }
          ]}
        />
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={3}>State</Heading>
          <Text>Idea of changing the behavior of a class when the state changes</Text>
        </Slide>
        <CodeSlide
          bgColor="lightblue"
          transition={[]}
          lang="js"
          code={require("raw-loader!./State.example")}
          ranges={[
            { loc: [0, 11], title: "State In React!" },
            { loc: [0, 7], note: "Update state" },
            { loc: [8, 18], note: "Handle click event to increment count on state" },
            { loc: [19, 31], note: "Render the page" }
          ]}
        />
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={3}>Template Method</Heading>
          <Text>Helps by defining the skeleton of an algorithm but delegating the implementation of steps to children.</Text>
        </Slide>
        <CodeSlide
          bgColor="lightblue"
          transition={[]}
          lang="js"
          code={require("raw-loader!./TemplateMethod.example")}
          ranges={[
            { loc: [0, 9], title: "Template Method!" },
            { loc: [0, 9], note: "Create the template" },
            { loc: [10, 14], note: "Create an example implementation of the steps" },
            { loc: [14, 17], note: "Create an example implementation of the steps" },
            { loc: [17, 20], note: "Create an example implementation of the steps" },
            { loc: [20, 23], note: "Create an example implementation of the steps" }
          ]}
        />
      </Deck>
    );
  }
}
