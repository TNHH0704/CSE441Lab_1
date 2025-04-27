import { Tabs } from "expo-router";

export default function TabLayout() {
    return (
        <Tabs>
            <Tabs.Screen name="employeeInfo" options={{ title: "Employee Info" }} />
            <Tabs.Screen name="sumFirstLast" options={{ title: "Sum First Last" }} />
            <Tabs.Screen name="minOfThree" options={{ title: "Min Of Three" }} />
            <Tabs.Screen name="hailstoneSequence" options={{ title: "Hailstone Sequence" }} />
        </Tabs>
    );
}
