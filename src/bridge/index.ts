/**
 * Bridge
 *
 * 2 completely independent hierarchies are connected by a "bridge",
 * accomplished through composition (e.g. feature and implementation
 * hierarchies).
 */

import AdvancedRemoteControl from "./AdvancedRemoteControl";
import RemoteControl from "./RemoteControl";
import SamsungTV from "./SamsungTV";
import SonyTV from "./SonyTV";

const remoteControl = new RemoteControl(new SamsungTV());
remoteControl.turnOn();
remoteControl.turnOff();

const advancedRemoteControl = new AdvancedRemoteControl(new SonyTV());
advancedRemoteControl.turnOn();
advancedRemoteControl.turnOff();
advancedRemoteControl.setChannel(33);
