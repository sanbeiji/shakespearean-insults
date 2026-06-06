package com.sanbeiji.shakespeareaninsults.viewmodel;

import com.sanbeiji.shakespeareaninsults.data.InsultGenerator;
import dagger.internal.DaggerGenerated;
import dagger.internal.Factory;
import dagger.internal.QualifierMetadata;
import dagger.internal.ScopeMetadata;
import javax.annotation.processing.Generated;
import javax.inject.Provider;

@ScopeMetadata
@QualifierMetadata
@DaggerGenerated
@Generated(
    value = "dagger.internal.codegen.ComponentProcessor",
    comments = "https://dagger.dev"
)
@SuppressWarnings({
    "unchecked",
    "rawtypes",
    "KotlinInternal",
    "KotlinInternalInJava"
})
public final class InsultViewModel_Factory implements Factory<InsultViewModel> {
  private final Provider<InsultGenerator> generatorProvider;

  public InsultViewModel_Factory(Provider<InsultGenerator> generatorProvider) {
    this.generatorProvider = generatorProvider;
  }

  @Override
  public InsultViewModel get() {
    return newInstance(generatorProvider.get());
  }

  public static InsultViewModel_Factory create(Provider<InsultGenerator> generatorProvider) {
    return new InsultViewModel_Factory(generatorProvider);
  }

  public static InsultViewModel newInstance(InsultGenerator generator) {
    return new InsultViewModel(generator);
  }
}
