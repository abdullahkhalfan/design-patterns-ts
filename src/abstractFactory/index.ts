/**
 * Abstract Factory
 *
 * Provide an interface for creating families of related objects.
 */

import ContactForm from "./ContactForm";
import AntFactory from "./ant/AntFactory";
import MaterialFactory from "./material/MaterialFactory";

const contactForm = new ContactForm();

contactForm.render(new AntFactory());
contactForm.render(new MaterialFactory());