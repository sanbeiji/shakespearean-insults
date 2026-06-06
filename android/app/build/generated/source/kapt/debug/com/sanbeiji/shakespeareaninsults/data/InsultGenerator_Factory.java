package com.sanbeiji.shakespeareaninsults.data;

import dagger.internal.DaggerGenerated;
import dagger.internal.Factory;
import dagger.internal.QualifierMetadata;
import dagger.internal.ScopeMetadata;
import javax.annotation.processing.Generated;

@ScopeMetadata("javax.inject.Singleton")
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
public final class InsultGenerator_Factory implements Factory<InsultGenerator> {
  @Override
  public InsultGenerator get() {
    return newInstance();
  }

  public static InsultGenerator_Factory create() {
    return InstanceHolder.INSTANCE;
  }

  public static InsultGenerator newInstance() {
    return new InsultGenerator();
  }

  private static final class InstanceHolder {
    private static final InsultGenerator_Factory INSTANCE = new InsultGenerator_Factory();
  }
}
