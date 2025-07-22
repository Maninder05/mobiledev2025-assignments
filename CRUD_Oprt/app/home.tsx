import { useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { Modal, Pressable, StyleSheet, Text, View } from 'react-native';
import { supabase } from '../lib/supabase';
 
export default function Home() {
  const [name, setName] = useState('');
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const router = useRouter();
 
  useEffect(() => {
    const loadUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        const { data } = await supabase
          .from('user_details')
          .select('first_name, last_name')
          .eq('uuid', user.id)
          .single();
 
        if (data) {
          setName(`${data.first_name} ${data.last_name}`);
        }
      } else {
        router.replace('/signin');
      }
    };
 
    loadUser();
  }, []);
 
  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.replace('/signin');
  };
 
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome back,</Text>
      <Text style={styles.name}>{name}</Text>
 
      <Pressable style={styles.logoutButton} onPress={() => setShowLogoutModal(true)}>
        <Text style={styles.logoutButtonText}>Logout</Text>
      </Pressable>
 
      {/* Logout Confirmation Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={showLogoutModal}
        onRequestClose={() => setShowLogoutModal(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Are you sure you want to logout?</Text>
            <View style={styles.modalButtons}>
              <Pressable
                style={[styles.modalButton, styles.cancelButton]}
                onPress={() => setShowLogoutModal(false)}
              >
                <Text style={styles.modalButtonText}>Cancel</Text>
              </Pressable>
              <Pressable
                style={[styles.modalButton, styles.confirmButton]}
                onPress={handleLogout}
              >
                <Text style={styles.modalButtonText}>Logout</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F9FF',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  title: {
    fontSize: 24,
    color: '#333',
    marginBottom: 8,
  },
  name: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#007AFF',
    marginBottom: 32,
  },
  logoutButton: {
    backgroundColor: '#FF3B30',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 12,
    elevation: 2,
  },
  logoutButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  modalContent: {
    backgroundColor: '#fff',
    marginHorizontal: 24,
    borderRadius: 16,
    padding: 24,
    elevation: 4,
  },
  modalTitle: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 16,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  modalButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  cancelButton: {
    backgroundColor: '#E5E5EA',
  },
  confirmButton: {
    backgroundColor: '#FF3B30',
  },
  modalButtonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
});
 
