package com.sanbeiji.shakespeareaninsults.data

import javax.inject.Inject
import javax.inject.Singleton

@Singleton
class InsultGenerator @Inject constructor() {
    private fun getRandomItem(list: List<String>): String {
        return list.random()
    }

    private fun getAOrAn(word: String): String {
        if (word.isEmpty()) return "a"
        val firstChar = word.first().lowercaseChar()
        return if (firstChar in listOf('a', 'e', 'i', 'o', 'u')) "an" else "a"
    }

    private fun getStems(w: String): List<String> {
        val ignore = setOf(
            "head", "headed", "witted", "faced", "brained", "minded", "blooded", "born", "borne", "bred", 
            "heart", "hearted", "eyed", "like", "fool", "piece", "clad", "skin", "skinned", "worm", "stone", 
            "bone", "meat", "sour", "star", "time", "suck", "sucking", "felled", "fallen", "grow", "growing", 
            "catching", "catcher", "picking", "keeping", "eating", "eater"
        )
        return w.lowercase().split(Regex("[\\s\\-]"))
            .filter { !ignore.contains(it) && it.length >= 3 }
            .map { it.take(4) }
    }

    private fun hasStemOverlap(words: List<String>): Boolean {
        val allStems = mutableSetOf<String>()
        var totalCount = 0
        for (w in words) {
            val stems = getStems(w)
            for (s in stems) {
                allStems.add(s)
                totalCount++
            }
        }
        return allStems.size < totalCount
    }

    fun generateInsultString(): String {
        if (Math.random() < 0.01) {
            return getRandomItem(InsultData.exactQuotes)
        }

        var adj1: String
        var adj2: String
        var noun: String
        var targetPart: String
        
        do {
            adj1 = getRandomItem(InsultData.insult1)
            adj2 = getRandomItem(InsultData.insult2)
            noun = getRandomItem(InsultData.insult3)
            targetPart = getRandomItem(InsultData.targetParts)
        } while (hasStemOverlap(listOf(adj1, adj2, noun)))

        // Using simplified weighted structure selection
        val rand = Math.random() * 119
        return when {
            rand < 40 -> "Thou $adj1, $adj2 $noun!"
            rand < 80 -> "Thy $targetPart is ${getAOrAn(adj2)} $adj2 $noun!"
            rand < 105 -> "Thou art as $adj1 as ${getAOrAn(adj2)} $adj2 $noun!"
            rand < 110 -> "Out of my sight, thou $adj1, $adj2 $noun!"
            rand < 113 -> "I do desire we may be better strangers, thou $adj1 $noun!"
            rand < 116 -> "Would thou wert clean enough to spit upon, thou $adj1 $noun!"
            else -> "More of thy conversation would infect my brain, thou $adj2 $noun!"
        }
    }
}
