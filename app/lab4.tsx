import { useState, useEffect } from 'react';
import { View, Text, Pressable, ScrollView, StyleSheet, Image } from 'react-native';
import vacationDestinations, { VacationDestination } from '../lib/vacationsDestinations';
import { Link } from 'expo-router';
import React from 'react';

export default function Lab4() {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [wikiData, setWikiData] = useState<{ description: string; imageUrl?: string } | null>(null);

  const handlePress = (id: number) => {
    setSelectedId(prev => (prev === id ? null : id));
  };

  useEffect(() => {
    const fetchWikiData = async () => {
      if (selectedId !== null) {
        const city = vacationDestinations.find(dest => dest.id === selectedId)?.location;
        if (!city) return;

        try {
         const response = await fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${city}`);
          const data = await response.json();
          setWikiData({
            description: data.extract,
            imageUrl: data.thumbnail?.source,
          });
        } catch (error) {
          console.error('Error fetching Wikipedia data:', error);
          setWikiData(null);
        }
      } else {
        setWikiData(null);
      }
    };

    fetchWikiData();
  }, [selectedId]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {vacationDestinations.map((destination) => (
        <View key={destination.id} style={styles.item}>
          <Pressable onPress={() => handlePress(destination.id)}>
            <Text style={styles.location}>{destination.location}</Text>
          </Pressable>

          {selectedId === destination.id && (
            <View style={styles.details}>
              <Text>Price: ${destination.price}</Text>
              <Text>Avg Temp: {destination.average_yearly_temperature}</Text>

              {wikiData && (
                <View style={{ marginTop: 10 }}>
                  {wikiData.imageUrl && (
                    <Image
                      source={{ uri: wikiData.imageUrl }}
                      style={styles.image}
                      resizeMode="cover"
                    />
                  )}
                  <Text style={styles.description}>{wikiData.description}</Text>
                </View>
              )}
            </View>
          )}
        </View>
      ))}


    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  item: {
    marginBottom: 20,
    backgroundColor: '#87ceeb',
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
  },
  location: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  details: {
    marginTop: 10,
    paddingLeft: 5,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginTop: 10,
  },
  description: {
    marginTop: 10,
    color: '#555',
  },
});