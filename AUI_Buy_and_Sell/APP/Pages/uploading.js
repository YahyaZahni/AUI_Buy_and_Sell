import { Image, Text, StyleSheet, View, TouchableOpacity } from "react-native";


export function Uploading({ image, progress, onCancel }) {
  return (
    <View
      style={[
        StyleSheet.absoluteFill,
        {
          alignItems: "center",
          justifyContent: "center",
          zIndex: 1,
        },
      ]}
    >

        <View
          style={{
            width: "70%",
            alignItems: "center",
            paddingVertical: 16,
            borderRadius: 14,
            backgroundColor: "rgba(255, 255, 255, 0.6)", // Adding slight transparency
          }}
        >
          {image && (
            <Image
              source={{ uri: image }}
              style={{
                width: 100,
                height: 100,
                resizeMode: "contain",
                borderRadius: 6,
                marginBottom: 12, // Adjusted for rowGap
              }}
            />
          )}
          <Text style={{ fontSize: 12 }}>Uploading...</Text>
          <View
            style={{
              height: 1,
              marginTop: 12, // Adjusted for rowGap
              marginBottom: 12, // Adjusted for rowGap
              width: "100%",
              backgroundColor: "#00000020", // Using backgroundColor instead of borderColor for full width
            }}
          />
          <TouchableOpacity onPress={onCancel}>
            <Text style={{ fontWeight: "500", color: "#3478F6", fontSize: 17 }}>
              Cancel
            </Text>
          </TouchableOpacity>
        </View>
    </View>
  );
}