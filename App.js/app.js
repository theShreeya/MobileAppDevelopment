import { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert, Switch, Image, TextInput, SafeAreaView } from 'react-native';

export default function HomeScreen() {
  const [water, setWater] = useState(0);
  const [isEnabled, setIsEnabled] = useState(true);
  const [goal, setGoal] = useState('2000');
  
  const handleAdd = () => {
    const newWater = water + 250;
    setWater(newWater);
    
    const goalValue = parseInt(goal) || 2000;
    
    if (isEnabled) {
      if (newWater >= goalValue) {
        Alert.alert('🎉 Goal reached!', `Congratulations! You've reached your goal of ${goalValue} ml!`);
      } else {
        const remaining = goalValue - newWater;
        Alert.alert('Water intake updated', `You need ${remaining} ml more to reach your goal.`);
      }
    }
  };

  const handleCheckGoal = () => {
    const goalValue = parseInt(goal) || 2000;
    const remaining = goalValue - water;

    if (water >= goalValue) {
      Alert.alert(
        '🎉 Goal Status',
        'Congratulations! You have met your water intake goal for today!',
        [
          { text: 'OK', onPress: () => console.log('OK Pressed') },
          { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
        ]
      );
    } else {
      Alert.alert(
        '💧 Keep Going!',
        `You still need to drink ${remaining} ml to reach your goal of ${goalValue} ml.`,
        [
          { text: 'OK', onPress: () => console.log('OK Pressed') },
          { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
        ]
      );
    }
  };

  return (
    <SafeAreaView style={styles.container}>

       <View style={styles.header}>
        <View style={styles.headerContent}>
          <Image 
            source={{ uri: 'https://marketplace.canva.com/ARZ8E/MAFmAUARZ8E/1/tl/canva-natural-leaf-icon.-100%25-naturals-vector-image-MAFmAUARZ8E.png'}}
            style={styles.logo}
          />
          <Text style={styles.headerText}>NutriLife</Text>
        </View>
      </View>
      
      <View style={styles.welcomeSection}>
        <Text style={styles.welcomeHeading}>Welcome to NutriLife</Text>
        <Text style={styles.tagline}>Eat smart. Live light.</Text>
      </View>
      
      <View style={styles.profileImageContainer}>
        <Image 
          source={{ uri: 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }} 
          style={styles.profileImage}
        />
        <Text style={styles.profileName}>Shreeya Shrestha</Text>
      </View>
      
      <View style={styles.card}>
        <View style={styles.row}>
          <Text style={styles.sectionTitle}>Water Intake Tracker</Text>
          <View style={styles.notificationRow}>
            <Text style={styles.notificationText}>Notifications</Text>
            <Switch 
              value={isEnabled} 
              onValueChange={(newValue) => {
                setIsEnabled(newValue);
                if (newValue) {
                  Alert.alert('Notifications', 'Notifications are now ON.');
                } else {
                  Alert.alert('Notifications', 'Notifications are now OFF.');
                }
              }}
              trackColor={{ false: '#ccc', true: '#8BC34A' }}
              thumbColor={isEnabled ? '#4CAF50' : '#f4f3f4'}
            />
          </View>
        </View>
        
        {/* Goal Input */}
        <View style={styles.goalContainer}>
          <Text style={styles.goalLabel}>Daily Water Goal (ml):</Text>
          <TextInput 
            style={styles.goalInput}
            keyboardType="numeric"
            value={goal}
            onChangeText={setGoal}
            placeholder="Enter your goal"
          />
        </View>
        
        <Text style={styles.info}>Current intake: {water} ml</Text>
        <View style={styles.progressContainer}>
          <View style={[styles.progressBar, { width: `${Math.min(100, (water / (parseInt(goal) || 2000)) * 100)}%` }]} />
        </View>
        
        <TouchableOpacity
          style={styles.button}
          onPress={handleAdd}
          activeOpacity={0.7}
        >
          <Text style={styles.buttonText}>+ Add 250 ml</Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={styles.buttonSecondary}
          onPress={() => { 
            setWater(0); 
            Alert.alert('Reset', 'Water intake has been reset to 0 ml.'); 
          }}
          activeOpacity={0.7}
        >
          <Text style={styles.buttonText}>Reset Intake</Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={styles.checkButton}
          onPress={handleCheckGoal}
          activeOpacity={0.7}
        >
          <Text style={styles.buttonText}>Check Goal Status</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1F8E9', 
  },
 header: {
    backgroundColor: '#4CAF50',
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginTop: 55, 
    alignItems: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
},
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
},
  logo: {
    width: 30,
    height: 30,
    marginRight: 10,
},
  headerText: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  },
  welcomeSection: {
    alignItems: 'center',
    paddingVertical: 15,
  },
  welcomeHeading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2E7D32',
    marginBottom: 5,
  },
  tagline: {
    fontSize: 16,
    color: '#558B2F',
    fontStyle: 'italic',
  },
  profileImageContainer: {
    alignItems: 'center',
    marginVertical: 15,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: '#4CAF50',
  },
  profileName: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  card: {
    margin: 20,
    padding: 20,
    backgroundColor: '#E8F5E9', 
    borderRadius: 15,
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 15,
  },
  notificationRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  notificationText: {
    fontSize: 14,
    color: '#333',
    marginRight: 8,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2E7D32',
  },
  goalContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    width: '100%',
  },
  goalLabel: {
    fontSize: 16,
    color: '#333',
    marginRight: 10,
  },
  goalInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#AED581',
    borderRadius: 8,
    padding: 8,
    backgroundColor: 'white',
  },
  progressContainer: {
    height: 15,
    width: '100%',
    backgroundColor: '#E0E0E0',
    borderRadius: 10,
    marginBottom: 20,
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#8BC34A',
  },
  info: {
    fontSize: 16,
    marginBottom: 10,
    color: '#333',
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#4CAF50', 
    padding: 12,
    borderRadius: 10,
    width: '100%',
    marginTop: 10,
    elevation: 2,
  },
  buttonSecondary: {
    backgroundColor: '#9E9E9E', 
    padding: 12,
    borderRadius: 10,
    width: '100%',
    marginTop: 10,
    elevation: 2,
  },
  checkButton: {
    backgroundColor: '#8BC34A', 
    padding: 12,
    borderRadius: 10,
    width: '100%',
    marginTop: 10,
    elevation: 2,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
});