package com.sanbeiji.shakespeareaninsults.viewmodel

import androidx.lifecycle.ViewModel
import com.sanbeiji.shakespeareaninsults.data.InsultGenerator
import dagger.hilt.android.lifecycle.HiltViewModel
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.flow.asStateFlow
import javax.inject.Inject

@HiltViewModel
class InsultViewModel @Inject constructor(
    private val generator: InsultGenerator
) : ViewModel() {

    private val _currentInsult = MutableStateFlow(generator.generateInsultString())
    val currentInsult: StateFlow<String> = _currentInsult.asStateFlow()

    fun generateNewInsult() {
        _currentInsult.value = generator.generateInsultString()
    }
}
