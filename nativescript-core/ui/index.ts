export { ActionBar, ActionItem, ActionItems, NavigationButton } from "./action-bar"
export { ActivityIndicator } from "./activity-indicator"
export { Animation, AnimationDefinition } from "./animation";
export { BottomNavigation } from "./bottom-navigation";
export { Builder, LoadOptions } from "./builder";
export { Button } from "./button";
export { ContentView } from "./content-view";
export { ViewBase, ShowModalOptions } from "./core/view-base";
export { View, Template, KeyedTemplate } from "./core/view";
export { DatePicker } from "./date-picker";

// No need go export dialogs, they are already export exported globally
// import { action, alert, confirm, login, prompt } from "./dialogs";
// export const nsDialogs = { action, alert, confirm, login, prompt };

export { EditableTextBase } from "./editable-text-base";
export { AnimationCurve, Accuracy, DeviceOrientation } from "./enums/enums";
export { Frame, NavigationEntry, NavigationContext, NavigationTransition, BackstackEntry, ViewEntry } from "./frame";

export {
  GestureEventData,
  GestureEventDataWithState,
  GestureStateTypes,
  GestureTypes,
  GesturesObserver,
  PanGestureEventData,
  PinchGestureEventData,
  RotationGestureEventData,
  SwipeDirection,
  SwipeGestureEventData,
  TouchGestureEventData
} from "./gestures";

export { HtmlView } from "./html-view";
export { Image } from "./image";
export { Cache } from "./image-cache";
export { Label } from "./label";

export * from "./layouts"; // barrel export

export { ListPicker } from "./list-picker";
export { ListView, ItemEventData, TemplatedItemsView, ItemsSource } from "./list-view";
export { Page, NavigatedData } from "./page";
export { Placeholder, CreateViewEventData } from "./placeholder";
export { Progress, } from "./progress";
export { ProxyViewContainer } from "./proxy-view-container";
export { Repeater } from "./repeater";
export { ScrollView, ScrollEventData } from "./scroll-view";
export { SearchBar } from "./search-bar";
export { SegmentedBar, SegmentedBarItem } from "./segmented-bar";
export { Slider } from "./slider";

// TODO: Consider adding APIs from style
// export { addTaggedAdditionalCSS, removeTaggedAdditionalCSS, } from "./styling/style-scope";
export { Style, BorderColor, CommonLayoutParams, Thickness } from "./styling/style";

export { Switch } from "./switch";
export { TabContentItem } from "./tab-navigation-base/tab-content-item";
export { TabNavigationBase } from "./tab-navigation-base/tab-navigation-base";
export { TabStrip, TabStripItemEventData } from "./tab-navigation-base/tab-strip";
export { TabStripItem } from "./tab-navigation-base/tab-strip-item";
export { TabView, TabViewItem } from "./tab-view";
export { Tabs } from "./tabs";
export { TextBase } from "./text-base";
export { TextField } from "./text-field";
export { TextView } from "./text-view";
export { TimePicker } from "./time-picker";
export { Transition } from "./transition";
export { WebView } from "./web-view";
